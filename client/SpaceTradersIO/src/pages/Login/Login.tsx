
import { Grid, Avatar, TextField, Button, createTheme, ThemeProvider, CircularProgress, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import style from './Login.module.css'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';
import { useGlobalContext } from '../../contexts/PlayerInfoContext';
function Login() {
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [regEmail, setRegEmail] = useState<string>("");
    const [regUsername, setRegUsername] = useState<string>("");
    const [access_token, setacesss_token] = useState<string>("");
    const [usernameError, setUsernameError] = useState<boolean>(false);
    const [usernameErrorMsg, setUsernameErrorMsg] = useState<string>("");
    const [loginError, setLoginError] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [modalBody, setModalBody] = useState<string>("");
    const navigate = useNavigate();
    const [loginLoading, setLoginLoading] = useState<boolean>(false);

    const [openRegister, setOpenRegister] = useState<boolean>(false);
    const [openMessage, setOpenMessage] = useState<boolean>(false);
    const { setPlayerInfo } = useGlobalContext();
    const defaultHeaders = { "Content-Type": "application/json" };


    const handleOpen = () => {
        setOpenRegister(true);
    };
    const handleClose = () => {
        setOpenRegister(false);
    };

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


    const login = async () => {
        setLoginLoading(true);
        try {
            const data = {
                username: username,
                access_token: access_token,
            }
            const response = await fetch("/api/login",
                {
                    method: "POST",
                    headers: defaultHeaders,
                    body: JSON.stringify(data),
                    mode: "cors",
                    credentials: "include",


                }
            )

            if (response.status === 401) {

                setLoginError(true);
            }
            else {
                try {

                    const options = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${Cookies.get("access_token")}`
                        },
                    };
                    const playerResponse = await fetch('https://api.spacetraders.io/v2/my/agent', options);

                    const playerResult = await playerResponse.json();
                    const PlayerInfo = playerResult.data;
                    setPlayerInfo(PlayerInfo);

                }
                catch (e) {
                    console.log(e);
                }

                navigate("/Dashboard");
            }
        }
        catch (e) {
            console.log(e);
        }
        setLoginLoading(false);

    }

    const createAccount = async () => {
        try {
            setLoading(true);
            const data = {
                symbol: regUsername,
                faction: "COSMIC",
            }
            const SpaceTradersResponse = await fetch("https://api.spacetraders.io/v2/register",
                {
                    method: "POST",
                    headers: defaultHeaders,
                    body: JSON.stringify(data)
                }
            )
            const SpaceTradersResult = await SpaceTradersResponse.json();
            if (SpaceTradersResult.error) {
                setUsernameError(true);
                if (SpaceTradersResult.error.code === 422) {
                    setUsernameErrorMsg("Username must be at most 14 characters");
                }
                if (SpaceTradersResult.error.code === 4111) {
                    setUsernameErrorMsg("Username already taken");
                }

            }

            else {
                setUsernameError(false);
                const account_data = {
                    username: regUsername,
                    email: regEmail,
                    access_token: SpaceTradersResult.data.token
                }
                const response = await fetch("/api/register",
                    {
                        method: "POST",
                        headers: defaultHeaders,
                        body: JSON.stringify(account_data)

                    }
                )
                if (response.status === 201) {
                    setOpenRegister(false);
                    setOpenMessage(true);
                    setModalTitle("Account Created");
                    setModalBody("Please check your email and login with the provided token");
                }
                else {
                    setOpenMessage(true);
                    setModalTitle("Error");
                    setModalBody("Something went wrong on server side, please try again");
                }


            }
            setLoading(false)

        }
        catch (e) {
            console.log(e);
            setModalTitle("Error");
            setModalBody("Something went wrong on server side, please try again");
        }


    }


    const propColor = { style: { color: "orange" } };
    const theme = createTheme({
        palette: {
            primary: {
                main: "#FFA500"
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <div className={style.loginBackground}></div>
            <h1>SpaceTraders</h1>
            <Grid className={style.grid}>
                <Box className={style.loginBox}>
                    <Grid>
                        <Avatar className={style.avatar} style={{ color: "white", backgroundColor: "orange" }}><RocketLaunchIcon></RocketLaunchIcon></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField helperText={loginError ? "Incorrect username or password" : ""} error={loginError} onChange={(e) => { setUsername(e.target.value); setLoginError(false) }} className={style.textfield} label="username" placeholder="Enter Username..." inputProps={propColor} InputLabelProps={propColor} />
                    <TextField type='password' onChange={(e) => { setacesss_token(e.target.value); setLoginError(false) }} className={style.textfield} label="token" placeholder="Enter Access Token..." inputProps={propColor} InputLabelProps={propColor} />
                    <Button onClick={login} color='primary' >{loginLoading ? <CircularProgress size="1rem" /> : "Login"}</Button>
                    <Button onClick={handleOpen}>Register</Button>
                </Box>
            </Grid>
            <React.Fragment>
                <Modal
                    open={openRegister}
                    onClose={handleClose}
                >
                    <Box sx={{ ...modalStyle, width: 280, height: 400 }}>
                        <h2>Create An Account"</h2>
                        <TextField required helperText={!regUsername ? "Username is required" : "" || usernameError ? usernameErrorMsg : ""} error={usernameError || !regUsername} onChange={(e) => { setRegUsername(e.target.value) }} className={style.textfield} label="username" placeholder="Enter Desired Username..." inputProps={propColor} InputLabelProps={propColor} data-testid='test-username-field' />
                        <TextField required helperText={!regEmail ? "Email is required" : ""} error={!regEmail} onChange={(e) => { setRegEmail(e.target.value) }} className={style.textfield} label="email" placeholder="Enter Email..." inputProps={propColor} InputLabelProps={propColor} data-testid='test-email-field' />
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <Button onClick={createAccount}>{loading ? <CircularProgress size="1rem" /> : "Create Account"}</Button>
                            <Button onClick={() => {
                                handleClose();
                                setRegEmail("");
                                setRegUsername("");
                            }}>Close</Button>
                        </Box>
                    </Box>
                </Modal>
                <Modal
                    open={openMessage}
                    onClose={() => { setOpenMessage(false) }}

                >
                    <Box className={style.modalBox} sx={{ ...modalStyle }}>
                        <Typography data-testid='register-modal-title' id="modal-modal-title" variant="h5" component="h2">
                            {modalTitle}
                        </Typography>
                        <Typography data-testid="register-modal-body" id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center" }}>
                            {modalBody}
                        </Typography>
                    </Box>
                </Modal>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Login