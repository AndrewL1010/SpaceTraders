import Navbar from '../../Components/Navbar'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { createTheme, ThemeProvider, CircularProgress, Button, Modal, Typography, Box, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Waypoints.module.css'
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

interface WaypointTrait {
  symbol: string;
  name: string;
  description: string;
}
interface Waypoint {
  symbol: string;
  type: string;
  x: number;
  y: number;
  traits: WaypointTrait[];
}
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
  gap: 5,
};

function Waypoints() {
  const [waypoints, setWaypoints] = useState<Waypoint[] | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const [shipLoading, setShipLoading] = useState<boolean>(false);
  const [showShipOptions, setShowShipOptions] = useState<boolean>(false)
  const [shipID, setShipID] = useState<string>("");
  const [action, setAction] = useState<string>("");
  const [availableShips, setAvailableShips] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState<number>(parseInt(localStorage.getItem("last-waypoints-page") || "1"));
  const [waypointID, setWaypointID] = useState<string>("");
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { id } = useParams();
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [travelLoading, setTravelLoading] = useState<boolean>(false);
  useEffect(() => {
    const auth = async () => {
      setLoading(true);
      const response = await fetch("/api/auth",
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
    const getWaypoints = async () => {
      const options = {
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${Cookies.get("access_token")}`
        }
      }
      const response = await fetch(`https://api.spacetraders.io/v2/systems/${id}/waypoints?page=${currentPage}&limit=20`, options);
      const result = await response.json();
      if (result.data !== undefined) {
        const waypointList: Waypoint[] = result.data.map((waypoint: Waypoint) => {
          return {
            symbol: waypoint.symbol,
            type: waypoint.type,
            x: waypoint.x,
            y: waypoint.y,
            traits: waypoint.traits
          }
        })
        setWaypoints(waypointList);
        setNumberOfPages(Math.round(result.meta.total / 20));
      }
      setLoading(false);
    }
    auth();
    getWaypoints();


  }, [id, currentPage, navigate])

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFA500"
      }
    }
  })
  const checkShipyard = async (waypoint_symbol: string) => {
    navigate(`/shipyards/${id}/${waypoint_symbol}`)
  }
  const checkMarket = async (waypoint_symbol: string) => {
    navigate(`/markets/${id}/${waypoint_symbol}`)
  }
  const ShowShipOptions = async (waypointID: string) => {
    setShipLoading(true)
    setShowShipOptions(true);
    setWaypointID(waypointID);
    const options = {
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${Cookies.get("access_token")}`
      }
    }
    const response = await fetch(`https://api.spacetraders.io/v2/my/ships`, options);
    const result = await response.json();
    if (result.data !== undefined) {
      const updatedShips = result.data.map((ship: { symbol: string }) => {
        return ship.symbol
      })
      setAvailableShips(updatedShips)
    }
    setShipLoading(false)

  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShipID((event.target as HTMLInputElement).value);
  };
  const handleChangeAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAction((event.target as HTMLInputElement).value);
  };
  const Navigate = async (ShipID: string, action: string) => {
    setTravelLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get("access_token")}`
      },
      body: JSON.stringify({
        waypointSymbol: waypointID,
      }),
    };

    const response = await fetch(`https://api.spacetraders.io/v2/my/ships/${ShipID}/${action}`, options);
    const result = await response.json();
    if (result.error !== undefined) {
      setTitle("Error");
      setBody(result.error.message);
      setShowMessage(true);
    }
    else {
      const arrivalDate = new Date(result.data.nav.route.arrival);
      const currentDate = new Date();
      const timeLeft = arrivalDate.getTime() - currentDate.getTime();
      const minutes = Math.floor(timeLeft / (1000 * 60));
      const seconds = Math.floor((timeLeft / 1000) % 60);
      setTitle("Ship Currently In Transit");
      setBody(`You have consumed ${result.data.fuel.consumed.amount} fuel and have ${result.data.fuel.current} fuel left. You will arrive at ${result.data.nav.route.destination.symbol} in ${minutes} minutes ${seconds} seconds.`);
      setShowMessage(true);
    }
    setTravelLoading(false);
    setShowShipOptions(false);


  }
  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    localStorage.setItem("last-waypoints-page", page.toString());
    setCurrentPage(page);
  }


  return (
    <>
      <Navbar />
      <Button data-testid='waypointsbuttontest'>vitest</Button>
      <ThemeProvider theme={theme}>
        {waypoints !== undefined && waypoints.length > 0 ? (
          <div className={styles.parent}>
            <h2 className={styles.title}>Waypoints In System {id}</h2>
            <div className={styles.container}>
              {
                waypoints.map((waypoint) => (
                  <div key={waypoint.symbol} className={styles.waypoints}>
                    <Table
                      key={waypoint.symbol}
                      sx={{
                        width: 400,
                        height: 300,
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
                            {waypoint.symbol}
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
                            Symbol
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            {waypoint.symbol}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Type
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            {waypoint.type}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            X
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            {waypoint.x}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Y
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            {waypoint.y}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Traits
                          </TableCell>
                          <TableCell className={styles.PContainer} align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            {
                              waypoint.traits.map((trait) => (
                                trait.name === "Shipyard" ?
                                  <span key={trait.name} className={styles.shipyards} onClick={() => { checkShipyard(waypoint.symbol) }}>{trait.name} <br></br></span> : trait.name === "Marketplace" ? <span key={trait.name} className={styles.shipyards} onClick={() => { checkMarket(waypoint.symbol) }}>{trait.name} <br></br></span> : <p key={trait.name} style={{ margin: 0 }}>{trait.name}</p>
                              ))

                            }
                          </TableCell>
                        </TableRow>


                      </TableBody>

                    </Table>
                    <Button data-testid={`test-travel-${waypoint.symbol}`} onClick={() => { ShowShipOptions(waypoint.symbol) }}>Travel</Button>
                  </div>

                ))
              }


              <Modal
                open={showShipOptions}
                onClose={() => { setShowShipOptions(false) }}

              >
                <Box className={styles.modalWidth} sx={{ ...modalStyle }}>
                  <Typography id="modal-modal-title" variant="h5" component="h2">
                    Pick a ship to travel to {waypointID}
                  </Typography>
                  <Box id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                    <FormControl>
                      <div className={styles.radioContainer}>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label1"
                          defaultValue="ships"
                          name="radio-buttons-group1"
                          value={shipID}
                          onChange={handleChange}
                        >
                          <h3>Your Ships</h3>
                          {availableShips.length > 0 ? (
                            availableShips.map((ship) => (
                              <FormControlLabel key={ship} value={ship} control={<Radio sx={{ color: "orange" }} />} label={ship} />
                            ))
                          )
                            :
                            (
                              <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center" }}>
                                {shipLoading ? <CircularProgress size="1rem" /> : "No Available Ships"}
                              </Typography>
                            )
                          }
                        </RadioGroup>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label2"
                          defaultValue="travelForm"
                          name="radio-buttons-group2"
                          value={action}
                          onChange={handleChangeAction}
                        >
                          <h3>Form of Travel</h3>
                          <FormControlLabel value={"warp"} control={<Radio sx={{ color: "orange" }} />} label={"Warp"} />
                          <FormControlLabel data-testid='test-waypoint-travel' value={"navigate"} control={<Radio sx={{ color: "orange" }} />} label={"Travel"} />
                        </RadioGroup>
                      </div>
                    </FormControl>
                    <Button data-testid='test-waypoint-travel-button' onClick={() => { Navigate(shipID, action) }}> {travelLoading ? <CircularProgress size="1rem" /> : "Travel Now"}</Button>
                  </Box>
                </Box>
              </Modal>
              <Modal
                open={showMessage}
                onClose={() => { setShowMessage(false) }}

              >
                <Box className={styles.modalWidth} sx={{ ...modalStyle }}>
                  <Typography data-testid='test-title' id="modal-modal-title" variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography data-testid="test-body" id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center" }}>
                    {body}
                  </Typography>
                </Box>
              </Modal>
            </div>
            <Pagination
              sx={{
                '& .Mui-selected': {
                  opacity: 0.5,
                  pointerEvents: "none",
                  cursor: "default"

                },
                button: { color: 'orange', borderColor: "orange", fontWeight: "bold" },

              }}
              count={numberOfPages}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
              page={currentPage}
            />
          </div>
        ) : (
          <h2 style={{ display: "flex", justifyContent: "center", marginTop: 100 }}> {loading ? <CircularProgress size="1rem" /> : "No Available Waypoints"}</h2>
        )

        }
      </ThemeProvider></>
  )
}

export default Waypoints