import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Cookies from 'js-cookie'
import { createTheme, ThemeProvider, CircularProgress } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Shipyards.module.css'
import { useParams } from 'react-router-dom';
import PurchaseButton from './PurchaseButton';


export interface Ship {
    type: string,
    name: string,
    description: string,
    purchasePrice: number,
    waypointSymbol: string,
    modules: Module[]
}
interface Module {
    symbol: string,
    name: string
}



function Shipyards() {
    const [ships, setShips] = useState<Ship[] | undefined>()
    const [loading, setLoading] = useState<boolean>(true);
    const { systemid, waypointid } = useParams();


    useEffect(() => {
        const getShips = async () => {
            const options = {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${Cookies.get("access_token")}`
                }
            }
            const response = await fetch(`https://api.spacetraders.io/v2/systems/${systemid}/waypoints/${waypointid}/shipyard`, options);
            const result = await response.json();
            if (result.data.ships !== undefined) {
                const shipList: Ship[] = result.data.ships.map((ship: Ship) => {
                    return {
                        type: ship.type,
                        name: ship.name,
                        description: ship.description,
                        purchasePrice: ship.purchasePrice,
                        waypointSymbol: waypointid,
                        modules: ship.modules.map((module) => {
                            return {symbol: module.symbol, name: module.name}
                        })
                    }
                })
                setShips(shipList);
            }
            setLoading(false);
        }
        if (Cookies.get("access_token") !== undefined && systemid !== undefined && waypointid !== undefined) {
            getShips();
        }

    }, [systemid, waypointid])


    const theme = createTheme({
        palette: {
            primary: {
                main: "#FFA500"
            }
        }
    })


    return (
        <>
            <Navbar />
            <ThemeProvider theme={theme}>
                {ships ? (
                    <>
                        <h2 className={styles.title}>Available Ships</h2>
                        <div className={styles.container}>
                            {
                                ships.map((ship) => (
                                    <div key={ship.type} className={styles.ships}>
                                        <Table
                                            key={ship.type}
                                            sx={{
                                                width: 500,
                                                height: 350,
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
                                                        {ship.type}
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
                                                        Name
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                        {ship.name}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        sx={{ borderColor: "black", fontWeight: "bold" }}
                                                    >
                                                        Description
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                        {ship.description}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        sx={{ borderColor: "black", fontWeight: "bold" }}
                                                    >
                                                        Price
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                        {ship.purchasePrice}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        sx={{ borderColor: "black", fontWeight: "bold" }}
                                                    >
                                                        Modules
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                                        {ship.modules !== undefined && ship.modules.length > 0 ?
                                                            ship.modules.map((module) => (
                                                                <span key={module.symbol}>{module.name} <br></br></span>
                                                            ))
                                                            : <span>N/A</span>
                                                        }
                                                    </TableCell>
                                                </TableRow>

                                            </TableBody>

                                        </Table>

                                        <PurchaseButton ship={ship} />
                                    </div>


                                ))

                            }


                        </div>
                    </>
                ) : (
                    <h2 style={{ display: "flex", justifyContent: "center", marginTop: 100 }}> {loading ? <CircularProgress /> : "No Available Ships"}</h2>
                )

                }
            </ThemeProvider ></>
    )
}

export default Shipyards