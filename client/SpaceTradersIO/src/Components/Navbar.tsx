import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import cookies from 'js-cookie';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../contexts/PlayerInfoContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';






const pages = ['Dashboard', 'Systems', 'Contracts'];
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


function Navbar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [openMessage, setOpenMessage] = useState<boolean>(false);
    const { playerInfo } = useGlobalContext();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    function createData(
        name: string,
        value: string | number,
    ) {
        return { name, value };
    }

    const rows = [
        createData('Credits', playerInfo.credits),
        createData('Headquarters', playerInfo.headquarters),
        createData('startingFaction', playerInfo.startingFaction),
        createData('shipCount', playerInfo.shipCount),

    ];


    const theme = createTheme({
        palette: {
            primary: {
                main: "#FFA500"
            }
        }
    })

    const logout = async () => {
        const response = await fetch("http://52.53.247.156/api/logout",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "csrf-encoded-token": cookies.get("csrf-encoded-token") || ""
                },
                mode: "cors",
                credentials: "include"

            }
        )
        if (response.status === 403) {
            setOpenMessage(true);
        }
        if (response.status === 204) {
            localStorage.removeItem("last-systems-page");
            localStorage.removeItem("last-waypoints-page");
            navigate("/");
        }

    }
    return (
        <ThemeProvider theme={theme}>
            <div>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <RocketLaunchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                onClick={() => { navigate("/Dashboard") }}
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: "1000",
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    cursor: "pointer"
                                }}
                            >
                                SpaceTraders
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                    MenuListProps={{ sx: { backgroundColor: "orange" } }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={() => {
                                            handleCloseNavMenu;
                                            if (page === "Systems") {
                                                localStorage.removeItem("last-systems-page");
                                            }
                                            if (page === "Waypoints") {
                                                localStorage.removeItem("last-waypoints-page");
                                            }
                                            navigate(`/${page}`)

                                        }}>
                                            <Typography textAlign="center" sx={{ fontWeight: "bold" }}>{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: "700",
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',

                                }}
                            >
                                SpaceTraders
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={() => {
                                            handleCloseNavMenu;
                                            if (page === "Systems") {
                                                localStorage.removeItem("last-systems-page");
                                            }
                                            if (page === "Waypoints") {
                                                localStorage.removeItem("last-waypoints-page");
                                            }
                                            navigate(`/${page}`);
                                        }}
                                        sx={{ my: 2, color: 'black', display: 'block', fontWeight: "bold" }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={playerInfo.symbol} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    MenuListProps={{ sx: { backgroundColor: "orange" } }}
                                >

                                    <MenuItem onClick={() => { handleCloseUserMenu(); logout(); }}>
                                        <Typography textAlign="center" sx={{ fontWeight: "bold" }}>Logout</Typography>
                                    </MenuItem>

                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>

                <Table sx={{ minWidth: 300, maxWidth: 500, backgroundColor: "orange", borderColor: "black", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ textAlign: "center", borderTop: 1, borderColor: "black", fontWeight: "bold" }} colSpan={2}>{playerInfo.symbol}</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ borderColor: "black", fontWeight: "bold" }}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" sx={{ borderColor: "black", fontWeight: "bold" }}>{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <React.Fragment>

                    <Modal
                        open={openMessage}
                        onClose={() => { setOpenMessage(false) }}

                    >
                        <Box sx={{ ...modalStyle }}>
                            <Typography id="modal-modal-title" variant="h5" component="h2">
                                {"Error"}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center" }}>
                                {"Unauthorized request from third party"}
                            </Typography>
                        </Box>
                    </Modal>
                </React.Fragment>
            </div>
        </ThemeProvider>
    )
}

export default Navbar
