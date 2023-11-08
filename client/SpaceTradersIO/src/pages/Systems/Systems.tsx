import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Cookies from 'js-cookie'
import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Systems.module.css'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom';
interface System {
  symbol: string,
  sectorSymbol: string,
  type: string,
  x: number,
  y: number,
}
interface Waypoint {
  symbol: string;
  type: string;
  x: number;
  y: number;
}
interface APISystem {
  symbol: string;
  sectorSymbol: string;
  type: string;
  x: number;
  y: number;
  waypoints: Waypoint[];
}
function Systems() {
  const [systems, setSystems] = useState<System[] | undefined>()
  const [loading, setLoading] = useState<boolean>(true);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(parseInt(localStorage.getItem("last-systems-page") || "1"));
  const navigate = useNavigate();


  useEffect(() => {
    const getSystems = async () => {
      const options = {
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${Cookies.get("access_token")}`
        }
      }
      const response = await fetch(`https://api.spacetraders.io/v2/systems?page=${currentPage}&limit=20`, options);
      const result = await response.json();
      if (result.data !== undefined) {
        const systemList: System[] = result.data.map((system: APISystem) => {
          return {
            symbol: system.symbol,
            sectorSymbol: system.sectorSymbol,
            type: system.type,
            x: system.x,
            y: system.y
          }
        })
        setSystems(systemList);
        setNumberOfPages(Math.round(result.meta.total / 20));
      }
      setLoading(false);
    }
    if (Cookies.get("access_token") !== undefined) {
      getSystems();
    }

  }, [currentPage])

  const redirect = (symbolID: string) => {
    localStorage.removeItem("last-waypoints-page");
    navigate(`/Waypoints/${symbolID}`);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFA500"
      }
    }
  })
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    localStorage.setItem("last-systems-page", page.toString())
    setCurrentPage(page);
  }
  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        {systems ? (
          <div className={styles.parent}>
            <h2 className={styles.title}>Systems</h2>
            <div className={styles.container}>
              {
                systems.map((system) => (
                  <div key={system.symbol} className={styles.systems} onClick={() => { redirect(system.symbol) }}>
                    <Table
                      key={system.symbol}
                      sx={{
                        minWidth: 300,
                        maxWidth: 500,
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
                            {system.symbol}
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
                            {system.symbol}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderColor: "black", fontWeight: "bold" }}
                          >
                            Sector Symbol
                          </TableCell>
                          <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>
                            {system.sectorSymbol}
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
                            {system.type}
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
                            {system.x}
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
                            {system.y}
                          </TableCell>
                        </TableRow>


                      </TableBody>

                    </Table>


                  </div>
      
                ))
              }

            </div>
            <Pagination
              sx={{
                '& .Mui-selected': {
                  opacity: 0.5,
                  pointerEvents: "none",
                  cursor: "default"

                },
                button: { color: 'orange', borderColor: "orange", fontWeight: "bold" },
                marginTop: "4rem",
                paddingBottom: "3rem"

              }}
              count={numberOfPages}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
              page={currentPage}
            />
          </div>
        ) : (
          <h2 style={{ display: "flex", justifyContent: "center", marginTop: 100 }}> {loading ? <CircularProgress /> : "No Available Systems"}</h2>
        )

        }

      </ThemeProvider ></>
  )
}

export default Systems