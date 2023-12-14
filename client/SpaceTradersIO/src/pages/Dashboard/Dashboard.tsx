// import { useEffect } from "react"
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { Box, Button, createTheme, Modal, ThemeProvider, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Dashboard.module.css'
import Cookies from "js-cookie";
import { CircularProgress } from '@mui/material'
import ArrivalCountDown from "./CountdownTimer";
import { useGlobalContext } from "../../contexts/PlayerInfoContext";


interface CargoInventory {
  symbol: string,
  name: string,
  description: string,
  units: number,
}
interface trait {
  symbol: string,
  name: string,
  description: string
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
    flightMode: string,
    route: {
      arrival: string,
      departure: {
        symbol: string,
        type: string,
        systemSymbol: string,
      },
      destination: {
        symbol: string,
        type: string,
        systemSymbol: string,
      }
    }
    status: string,

  },
  fuel: {
    capacity: number,
    current: number,
  },
  frame: {
    name: string
  },
  waypoint_traits: trait[]
  waypoint_type: string,

}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#2a2a2a',
  border: '2px solid #FFA500',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display: "flex",
  flexDirection: "column",
  gap: 5,
};

function Dashboard() {
  const [loading, setLoading] = useState<boolean>(false);
  const [ships, setShips] = useState<OwnedShip[]>([])
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [showtraits, setShowtraits] = useState<boolean>(false);
  const [traitSystem, setTraitSystem] = useState<string>("");
  const [traitWaypoint, setTraitWaypoint] = useState<string>("");
  const [waypointType, setWaypointType] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const navigate = useNavigate();
  const { playerInfo, setPlayerInfo } = useGlobalContext();
  const [currentModalTraits, setCurrentModalTrait] = useState<trait[]>([])
  const [refuelLoading, setRefuelLoading] = useState<boolean>(false);
  const [extractLoading, setExtractLoading] = useState<boolean>(false);
  const [dockLoading, setDockLoading] = useState<boolean>(false);

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

        const shipListPromises: OwnedShip[] = result.data.map(async (ship: OwnedShip) => {
          const url = `https://api.spacetraders.io/v2/systems/${ship.nav.systemSymbol}/waypoints/${ship.nav.waypointSymbol}`;
          const options = { method: 'GET', headers: { Accept: 'application/json' } };
          const response = await fetch(url, options);
          const result = await response.json();

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
              expiration: ship.cooldown.expiration

            },
            nav: {
              systemSymbol: ship.nav.systemSymbol,
              waypointSymbol: ship.nav.waypointSymbol,
              flightMode: ship.nav.flightMode,
              route: {
                arrival: ship.nav.route.arrival,
                departure: {
                  symbol: ship.nav.route.departure.symbol,
                  type: ship.nav.route.departure.type,
                  systemSymbol: ship.nav.route.departure.systemSymbol,

                },
                destination: {
                  symbol: ship.nav.route.destination.symbol,
                  type: ship.nav.route.destination.type,
                  systemSymbol: ship.nav.route.destination.systemSymbol,
                }
              },
              status: ship.nav.status
            },
            fuel: {
              capacity: ship.fuel.capacity,
              current: ship.fuel.current,
            },
            frame: {
              name: ship.frame.name

            },
            waypoint_traits: result.data.traits,
            waypoint_type: result.data.type


          }

        })
        const shipList = await Promise.all(shipListPromises);
        setShips(shipList);
      }
      setLoading(false);
    }


    auth();
    getShipInfo();
  }, [navigate])

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFA500"
      }
    }
  })

  const handleDocking = async (shipSymbol: string, action: string) => {
    setDockLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get("access_token")}`
      },
    };
    const response = await fetch(`https://api.spacetraders.io/v2/my/ships/${shipSymbol}/${action === "dock" ? "dock" : "orbit"}`, options);
    const result = await response.json();
    if (result.data !== undefined) {
      const updatedShips: OwnedShip[] = ships.map((ship) => {
        if (ship.cooldown.shipSymbol === shipSymbol) {
          return {
            ...ship, nav: { ...ship.nav, status: action === "dock" ? "DOCKED" : "IN_ORBIT" },
          };
        } else {
          return ship;
        }
      });
      setShips(updatedShips);
    }
    if (result.error) {
      setTitle("Error");
      setBody(result.error.message);
      setShowMessage(true);
    }
    setDockLoading(false);
  }
  const handleRefuel = async (shipSymbol: string) => {
    setRefuelLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get("access_token")}`
      },
    };
    const response = await fetch(`https://api.spacetraders.io/v2/my/ships/${shipSymbol}/refuel`, options);
    const result = await response.json();
    if (result.data !== undefined) {
      const updatedShips = ships.map((ship) => {
        if (ship.cooldown.shipSymbol === result.data.transaction.shipSymbol) {
          return { ...ship, fuel: { ...ship.fuel, current: ship.fuel.capacity } };
        }
        else {
          return ship;
        }
      })
      setShips(updatedShips);
    }
    if (result.error) {
      setTitle("Error");
      setBody(result.error.message);
      setShowMessage(true);
    }
    else {
      if (result.data.transaction.totalPrice === 0) {
        setTitle("Error");
        setBody("Your fuel tank is already full");
        setShowMessage(true);
      }
      else {
        setPlayerInfo({ ...playerInfo, credits: playerInfo.credits - result.data.transaction.totalPrice });
        setTitle("Refuel");
        setBody(`at ${result.data.transaction.pricePerUnit} per unit of fuel you have bought ${result.data.transaction.units} units of fuel at a total of ${result.data.transaction.totalPrice}`);
        setShowMessage(true);
      }
    }
    setRefuelLoading(false);
  }
  const extract = async (shipSymbol: string) => {
    setExtractLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get("access_token")}`
      },
    };
    const response = await fetch(`https://api.spacetraders.io/v2/my/ships/${shipSymbol}/extract`, options);
    const result = await response.json();
    if (result.error !== undefined) {

      setTitle("Error");
      setBody(result.error.message);
      setShowMessage(true)
    }
    else {
      const updatedShips = ships.map((ship) => {
        if (ship.cooldown.shipSymbol === shipSymbol) {
          return { ...ship, cargo: { ...ship.cargo, units: result.data.cargo.units, inventory: result.data.cargo.inventory }, cooldown: { ...ship.cooldown, expiration: result.data.cooldown.expiration } }
        }
        else {
          return ship;
        }
      })
      setShips(updatedShips);
      setTitle("Extraction");
      setBody(`You have extracted ${result.data.extraction.yield.units} ${result.data.extraction.yield.symbol}`);
      setShowMessage(true)
    }
    setExtractLoading(false);
  }
  const handleShipWaypoint = (traits: trait[], waypoint: string, system: string, type: string) => {
    setCurrentModalTrait(traits);
    setTraitWaypoint(waypoint);
    setTraitSystem(system)
    setWaypointType(type)
    setShowtraits(true);

  }


  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        {ships ? (
          <>
            <h2 className={styles.title}>Your Ships</h2>
            <div className={styles.container}>

              {
                ships.map((ship) => (
                  <div key={ship.cooldown.shipSymbol} className={styles.ships}>
                    <Table
                      key={ship.cooldown.shipSymbol}
                      sx={{
                        width: 350,
                        height: 150,
                        backgroundColor: "orange",
                        borderColor: "black",
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: 2,
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
                            {ship.frame.name}
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
                            status
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            {ship.nav.status === "DOCKED" ? (<span>{ship.nav.status} at <span className={styles.ship_waypoints} onClick={() => { handleShipWaypoint(ship.waypoint_traits, ship.nav.waypointSymbol, ship.nav.systemSymbol, ship.waypoint_type) }}>{ship.nav.waypointSymbol}</span></span>) : ship.nav.status}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Item Capacity
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            <p className={styles.p}>{ship.cargo.units}/{ship.cargo.capacity}</p>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Fuel
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            <p className={styles.p}>{ship.fuel.current}/{ship.fuel.capacity}</p>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Current System
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            <span className={styles.currentsystem} onClick={() => { navigate(`/Waypoints/${ship.nav.systemSymbol}`); }}>{ship.nav.systemSymbol}</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Inventory
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            {ship.cargo.inventory.length > 0 ? (

                              ship.cargo.inventory.map((item) => (
                                <span key={item.symbol}>{item.name} ({item.units}) <br></br></span>
                              ))


                            )
                              : <span>Empty</span>

                            }
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Arrival Time
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            <ArrivalCountDown arrivalDateString={ship.nav.route.arrival} />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Ship Cooldown
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            <ArrivalCountDown arrivalDateString={ship.cooldown.expiration} />
                          </TableCell>
                        </TableRow>

                      </TableBody>

                    </Table>
                    <div>
                      {ship.nav.status === "DOCKED" ?
                        (

                          <Button onClick={() => { handleDocking(ship.cooldown.shipSymbol, "undock") }}>{dockLoading ? <CircularProgress /> : "Undock"}</Button>


                        )
                        :
                        (
                          <>
                            <Button onClick={() => { handleDocking(ship.cooldown.shipSymbol, "dock") }}>{dockLoading ? <CircularProgress /> : "Dock"}</Button>
                            <Button onClick={() => { extract(ship.cooldown.shipSymbol) }}>{extractLoading ? <CircularProgress /> : "Extract"}</Button>
                          </>
                        )

                      }

                      <Button onClick={() => { handleRefuel(ship.cooldown.shipSymbol) }}>{refuelLoading ? <CircularProgress /> : "Refuel"}</Button>

                    </div>
                  </div>



                ))

              }
              <Modal
                open={showMessage}
                onClose={() => { setShowMessage(false) }}

              >
                <Box className={styles.modalWidth} sx={{ ...modalStyle, margin: "0" }}>
                  <Typography id="modal-modal-title" variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center", marginTop: "0" }}>
                    {body}
                  </Typography>
                </Box>
              </Modal>




              <Modal
                open={showtraits}
                onClose={() => { setShowtraits(false) }}

              >
                <Box className={styles.modalWidth} sx={{ ...modalStyle, margin: "0" }}>
                  <Typography id="modal-modal-title" variant="h5" component="h2">
                    {traitWaypoint}
                  </Typography>
                  <Table
                    sx={{
                      width: 500,
                      height: 150,
                      backgroundColor: "orange",
                      borderColor: "black",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: 2,
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

                          {waypointType}

                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {currentModalTraits.map((trait) => (
                        <TableRow key={trait.symbol}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            {trait.name === "Marketplace" ? (
                              <span className={styles.ship_waypoints} onClick={() => { navigate(`/markets/${traitSystem}/${traitWaypoint}`) }}>{trait.name}</span>
                            ) : trait.name === "Shipyard" ? (
                              <span className={styles.ship_waypoints} onClick={() => { navigate(`/shipyards/${traitSystem}/${traitWaypoint}`) }}>{trait.name}</span>
                            ) : (
                              <span>{trait.name}</span>
                            )}
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            {
                              trait.description
                            }
                          </TableCell>
                        </TableRow>
                      ))


                      }



                    </TableBody>

                  </Table>
                </Box>
              </Modal>

            </div></>
        ) : (
          <h2 style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>{loading ? <CircularProgress /> : "No Owned Ships"}</h2>
        )

        }
      </ThemeProvider >

    </>
  )
}

export default Dashboard