import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie';
import Navbar from '../../Components/Navbar';
import { Box, Button, CircularProgress, createTheme, FormControl, FormControlLabel, Modal, Radio, RadioGroup, TextField, ThemeProvider, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Markets.module.css'
import { useGlobalContext } from '../../contexts/PlayerInfoContext';
import { useNavigate } from 'react-router-dom';
interface CargoInventory {
  symbol: string,
  name: string,
  description: string,
  units: number,
}
interface OwnedShip {
  cargo: {
    capacity: number,
    inventory: CargoInventory[],
    units: number
  },
  cooldown: {
    shipSymbol: string,
    totalSeconds: number,
    remainingSeconds: number,
    expiration: string,
  },
  nav: {
    systemSymbol: string,
    waypointSymbol: string,
    status: string,
  },

}
interface ImportItem {
  symbol: string,
  name: string,
  description: string,
}
interface TradeGoodItem {
  symbol: string,
  tradeVolume: number,
  supply: string,
  purchasePrice: number,
  sellPrice: number,
}
interface Market {
  symbol: string,
  imports: ImportItem[],
  tradeGoods: TradeGoodItem[],
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
    secondary: {
      main: "#000000"
    }
  }
})
const propColor = { style: { color: "orange" } };
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#2a2a2a',
  border: '2px solid #FFA500',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display: "flex",
  flexDirection: "column",
  gap: 1,
  justifyContent: "center",
  alignItems: "center",
  color: "orange"
};
function Markets() {
  const { systemid, waypointid } = useParams();
  const [market, setMarket] = useState<Market>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showShop, setShowShop] = useState<boolean>(false);
  const [sellLoading, setSellLoading] = useState<boolean>(false);
  const [ownedShips, setOwnedShips] = useState<OwnedShip[]>([])
  const [purchasePrice, setPurchasePrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  const [tradeVolume, setTradeVolume] = useState<number>(0);
  const [itemName, setItemName] = useState<string>("");
  const [shipID, setShipID] = useState<string>("");
  const { playerInfo, setPlayerInfo } = useGlobalContext();
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [purchaseLoading, setPurchaseLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [modalShip, setModalShip] = useState<{ shipSymbol: string, item: CargoInventory }>();
  const [showModalShip, setShowModalShip] = useState<boolean>(false);

  const navigate = useNavigate();


  useEffect(() => {
    const auth = async () => {
      setLoading(true);
      const response = await fetch("https://andrewlu.ca/api/auth",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          credentials: "include",
        }
      )
      if (response.status !== 201) {
        navigate("/");
      }
    }
    const getMarket = async () => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get("access_token")}`
        },
      };
      const response = await fetch(`https://api.spacetraders.io/v2/systems/${systemid}/waypoints/${waypointid}/market`, options);
      const result = await response.json();
      if (result.data !== undefined) {
        const updatedMarket = {
          symbol: result.data.symbol,
          imports: result.data.imports,
          tradeGoods: result.data.tradeGoods
        }
        setMarket(updatedMarket);
      }
      setLoading(false);

    }
    const getShipInfo = async () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get("access_token")}`
        },
      };
      const response = await fetch("https://api.spacetraders.io/v2/my/ships", options);
      const result = await response.json();
      if (result.data !== undefined) {
        const shipList: OwnedShip[] = result.data.map((ship: OwnedShip) => {
          return {
            cargo: {
              inventory: ship.cargo.inventory,
              capacity: ship.cargo.capacity,
              units: ship.cargo.units
            },
            cooldown: {
              shipSymbol: ship.cooldown.shipSymbol,
              totalSeconds: ship.cooldown.totalSeconds,
              remainingSeconds: ship.cooldown.remainingSeconds,
              expiration: ship.cooldown.expiration,
            },
            nav: {
              systemSymbol: ship.nav.systemSymbol,
              waypointSymbol: ship.nav.waypointSymbol,
              status: ship.nav.status

            },



          }
        })
        setOwnedShips(shipList);
      }
      setLoading(false);
    }
    auth();
    if (Cookies.get("access_token") !== undefined) {
      getMarket();
      getShipInfo();
    }

  }, [systemid, waypointid, navigate])


  const submitPurchase = async () => {
    setPurchaseLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get("access_token")}`
      },
      body: `{"symbol":"${itemName}","units":${purchaseAmount}}`
    };
    const response = await fetch(`https://api.spacetraders.io/v2/my/ships/${shipID}/purchase`, options);
    const result = await response.json();
    if (result.error !== undefined) {
      setTitle("Error");
      setBody(result.error.message);
      setShowShop(false);
      setShowMessage(true);
    }
    else {
      const updatedPlayerInfo = { ...playerInfo, credits: playerInfo.credits - result.data.transaction.totalPrice };
      setPlayerInfo(updatedPlayerInfo);
      const updatedOwnedShips = ownedShips.map((ship) => {
        if (ship.cooldown.shipSymbol === result.data.transaction.shipSymbol) {
          return { ...ship, cargo: result.data.cargo };
        }
        else {
          return ship;
        }
      })

      setOwnedShips(updatedOwnedShips);
      setShowShop(false);

      setTitle("Purchased");
      setBody(`You have successfully purchased ${purchaseAmount} ${itemName}`);
      setShowMessage(true);
    }

    setPurchaseLoading(false);
  }
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPurchaseAmount(parseInt(event.target.value));
    setTotalPrice(parseInt(event.target.value) * purchasePrice);
  }
  const handleShipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShipID((event.target as HTMLInputElement).value);
  };
  const handleModalShip = (shipSymbol: string, item: CargoInventory) => {
    const modalProps = { shipSymbol: shipSymbol, item: item }
    setModalShip(modalProps);
    setShowModalShip(true);
  }


  const handleSell = async () => {
    setSellLoading(true);
    if (modalShip !== undefined) {
      const url = `https://api.spacetraders.io/v2/my/ships/${modalShip.shipSymbol}/sell`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${Cookies.get("access_token")}`
        },
        body: `{"symbol":"${modalShip.item.symbol}","units":${modalShip.item.units}}`
      };
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.error !== undefined) {
        setTitle("Error");
        setBody(result.error.message);
        setShowMessage(true);
      }
      else {
        const updatedPlayerInfo = { ...playerInfo, credits: playerInfo.credits + result.data.transaction.totalPrice };
        setPlayerInfo(updatedPlayerInfo);
        const updatedOwnedShips = ownedShips.map((ship) => {
          if (ship.cooldown.shipSymbol === result.data.transaction.shipSymbol) {
            return { ...ship, cargo: result.data.cargo };
          }
          else {
            return ship;
          }
        })
        setOwnedShips(updatedOwnedShips);

        setTitle(`Success`);
        setBody(`You have sucessfully sold ${modalShip.item.units} ${modalShip.item.name} for ${result.data.transaction.totalPrice}`);
        setShowMessage(true);
      }
    }
    setSellLoading(false);
    setShowModalShip(false)
  }


  const handleModalShipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (modalShip !== undefined) {
      const updatedModalShip = { ...modalShip, item: { ...modalShip.item, units: parseInt((event.target as HTMLInputElement).value) } }
      setModalShip(updatedModalShip);
    }
  };

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        {market !== undefined && market.imports !== undefined && market.imports.length > 0 ? (
          <div>
            <h2 className={styles.marketTitle}>{waypointid} Market</h2>
            {

              <div className={styles.contracts}>
                <Table
                  sx={{
                    minWidth: 300,
                    maxWidth: 1000,
                    backgroundColor: "orange",
                    borderColor: "black",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: 3
                  }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderTop: 1,
                          borderColor: "black",
                          fontWeight: "bold",
                          fontSize: "1rem"
                        }}
                        colSpan={2}
                      >
                        Imports Information
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {market?.imports?.map((importItem) => (
                      <TableRow key={`${importItem.symbol}:type`}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderColor: "black", fontWeight: "bold" }}
                        >
                          {importItem.name}
                        </TableCell>
                        <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                          {importItem.description}
                        </TableCell>
                      </TableRow>
                    ))

                    }

                  </TableBody>

                </Table>

              </div>

            }
          </div>
        ) : (
          <h2 style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>{loading ? <CircularProgress /> : "No Available Market Items"}</h2>
        )

        }

        {market !== undefined && market.tradeGoods !== undefined && market.tradeGoods.length > 0 ? (

          <>
            <h2 className={styles.shopTitle}>Available Items In Shop</h2>
            <div className={styles.goods_container}>
              {market.tradeGoods.map((good) => (
                <div onClick={() => {
                  setItemName(good.symbol);
                  setTradeVolume(good.tradeVolume);
                  setPurchasePrice(good.purchasePrice);
                  setShowShop(true);

                }} className={styles.contracts} key={good.symbol}>
                  <Table
                    key={good.symbol}
                    sx={{
                      minWidth: 300,
                      maxWidth: 500,
                      backgroundColor: "orange",
                      borderColor: "black",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            textAlign: "center",
                            borderTop: 1,
                            borderColor: "black",
                            fontWeight: "bold",
                          }}
                          colSpan={2}
                        >
                          {good.symbol}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderColor: "black", fontWeight: "bold" }}
                        >
                          Trade Volume
                        </TableCell>
                        <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                          {good.tradeVolume}
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderColor: "black", fontWeight: "bold" }}
                        >
                          Supply
                        </TableCell>
                        <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                          {good.supply}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderColor: "black", fontWeight: "bold" }}
                        >
                          Purchase Price
                        </TableCell>
                        <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                          {good.purchasePrice}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderColor: "black", fontWeight: "bold" }}
                        >
                          Sell Price
                        </TableCell>
                        <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                          {good.sellPrice}
                        </TableCell>
                      </TableRow>


                    </TableBody>
                  </Table>

                </div>

              ))

              }
            </div>
          </>
        ) :
          (
            <h2 style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>{loading ? <CircularProgress /> : "No Available Items In Shop"}</h2>
          )



        }
        <Modal
          open={showShop}
          onClose={() => { setShowShop(false) }}

        >
          <Box sx={{ ...modalStyle, margin: "0" }}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              {itemName}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center", marginTop: "0" }}>
              Price: {purchasePrice}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center", marginTop: "0" }}>
              Max Amount: {tradeVolume}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center", marginTop: "0" }}>
              Total Price: {totalPrice}
            </Typography>
            <TextField type='number' id="filled-basic" label="Amount" variant="filled" inputProps={propColor} InputLabelProps={propColor} onChange={handleAmountChange} />

            <FormControl sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "3rem", marginBottom: "1rem" }}>
              <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center", marginTop: "0" }}>
                Choose A Ship To Deposit Purchased Items
              </Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label1"
                defaultValue="female1"
                name="radio-buttons-group1"
                value={shipID}
                onChange={handleShipChange}
              >
                {ownedShips !== undefined && ownedShips.length > 0 ? (
                  ownedShips.map((ship) => (
                    <FormControlLabel key={ship.cooldown.shipSymbol} value={ship.cooldown.shipSymbol} control={<Radio sx={{ color: "orange" }} />} label={ship.cooldown.shipSymbol} />
                  ))
                )
                  :
                  (
                    <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center" }}>
                      "You must have a ship docked here to purchase!"
                    </Typography>
                  )
                }
              </RadioGroup>
            </FormControl>

            <Button onClick={submitPurchase}>{purchaseLoading ? <CircularProgress /> : "Confirm Purchase"}</Button>
          </Box>
        </Modal>
        <Modal
          open={showMessage}
          onClose={() => { setShowMessage(false) }}

        >
          <Box sx={{ ...modalStyle }}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center" }}>
              {body}
            </Typography>
          </Box>
        </Modal>

        {ownedShips !== undefined && ownedShips.length > 0 ? (

          <div className={styles.ships}>
            <div className={styles.goods_container}>
              {ownedShips.map((ship) => {
                if (ship.nav.waypointSymbol === waypointid && ship.nav.status === "DOCKED" && ship.cargo.inventory.length > 0) {
                  return (
                    <div key={ship.cooldown.shipSymbol}>
                      <Table

                        key={ship.cooldown.shipSymbol}
                        sx={{
                          minWidth: 300,
                          maxWidth: 500,
                          backgroundColor: "orange",
                          borderColor: "black",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                borderTop: 1,
                                borderColor: "black",
                                fontWeight: "bold",
                              }}
                              colSpan={2}
                            >
                              {ship.cooldown.shipSymbol}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {ship.cargo.inventory.map((item) => (

                            <TableRow onClick={() => { handleModalShip(ship.cooldown.shipSymbol, item) }} key={item.symbol} className={styles.shipcargo}>
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{ borderColor: "black", fontWeight: "bold" }}
                              >
                                {item.name}
                              </TableCell>
                              <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                {item.units}
                              </TableCell>
                            </TableRow>

                          ))


                          }

                        </TableBody>
                      </Table>

                    </div>
                  )
                }
              })

              }
            </div>

            <Modal
              open={showModalShip}
              onClose={() => { setShowModalShip(false) }}

            >
              <Box sx={{ ...modalStyle, margin: "0" }}>
                {modalShip !== undefined ? (
                  <>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                      {modalShip?.shipSymbol

                      }
                    </Typography>
                    <div style={{ marginTop: "30px" }}>
                      <TextField onChange={handleModalShipChange} inputProps={{ style: { color: "orange" } }} InputLabelProps={{ style: { color: "orange" } }} className={styles.inputs} type='number' id={modalShip.item.symbol} label={modalShip.item.name} variant="outlined" value={modalShip.item.units} size='small' />
                    </div>
                    <Button onClick={handleSell}>{sellLoading ? <CircularProgress /> : "Sell"}</Button>
                  </>
                )
                  : <div>
                    item does not exist
                  </div>
                }

              </Box>
            </Modal>
          </div>
        ) : null


        }

      </ThemeProvider></>
  )
}

export default Markets