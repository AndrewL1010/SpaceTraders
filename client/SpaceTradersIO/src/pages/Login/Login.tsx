
import { Grid, Avatar, TextField, Button, createTheme, ThemeProvider, CircularProgress, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import style from './Login.module.css'
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import React from 'react';
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';
import { useGlobalContext } from '../../contexts/PlayerInfoContext';
import { useSearchParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
function Login() {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [regEmail, setRegEmail] = useState<string>("");
    const [regUsername, setRegUsername] = useState<string>("");
    const [regPassword, setRegPassword] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [usernameError, setUsernameError] = useState<boolean>(false);
    const [usernameErrorMsg, setUsernameErrorMsg] = useState<string>("");
    const [loginError, setLoginError] = useState<boolean>(false);
    const [emailVerifyError, setEmailVerifyError] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [modalBody, setModalBody] = useState<string>("");

    const [loginLoading, setLoginLoading] = useState<boolean>(false);

    const [openRegister, setOpenRegister] = useState<boolean>(false);
    const [openMessage, setOpenMessage] = useState<boolean>(false);
    const { setPlayerInfo } = useGlobalContext();
    const defaultHeaders = { "Content-Type": "application/json" };

    interface LoginInfo {
        username: string,
        password: string,
    }

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
        gap: 2,
    };

    const authenticateLogin = async (data: LoginInfo) => {
        return await fetch("/api/login",
            {
                method: "POST",
                headers: defaultHeaders,
                body: JSON.stringify(data),
                mode: "cors",
                credentials: "include",


            });
    }
    const fetchPlayerInfo = async () => {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get("access_token")}`
            },
        };
        const playerResponse = await fetch('https://api.spacetraders.io/v2/my/agent', options);
        const playerResult = await playerResponse.json();
        return playerResult.data;
    }


    const login = async () => {
        setLoginLoading(true);
        try {
            const data = {
                username: username,
                password: password,
            }
            const response = await authenticateLogin(data);
            const result = await response.json();
            if (response.status === 401) {
                setLoginError(true);
                if (result.message === "user has not verified through email yet") {
                    setEmailVerifyError(true)
                }
                else {
                    setEmailVerifyError(false)
                }

            }
            else {
                try {
                    const PlayerInfo = await fetchPlayerInfo();
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
                    password: regPassword,
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
                    setModalTitle("Pending Verification");
                    setModalBody("Please check your email and verify your account");
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

    useEffect(() => {
        if (searchParams.get("recently_verified") !== undefined) {
            if (searchParams.get("recently_verified") === "true") {
                setModalTitle("Verification");
                setModalBody("Your account has been verified. You may now login");
                setOpenMessage(true)
                const queryParams = new URLSearchParams(location.search);
                queryParams.delete('recently_verified');
                navigate("/", { replace: true })
            }
            if (searchParams.get("recently_verified") === "false") {
                setModalTitle("Verification");
                setModalBody("Your verification link is invalid or has expired");
                setOpenMessage(true)
                const queryParams = new URLSearchParams(location.search);
                queryParams.delete('recently_verified');
                navigate("/", { replace: true })
            }


        }



    }, [])

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
                    <TextField helperText={loginError ? (emailVerifyError ? "Check your email to verify account" : "Incorrect username or password") : ""} error={loginError} onChange={(e) => { setUsername(e.target.value); setLoginError(false) }} className={style.textfield} label="username" placeholder="Enter Username..." inputProps={propColor} InputLabelProps={propColor} data-testid="test-login-username" />
                    <TextField type='password' onChange={(e) => { setPassword(e.target.value); setLoginError(false) }} className={style.textfield} label="password" placeholder="Enter Password..." inputProps={propColor} InputLabelProps={propColor} data-testid="test-login-password" />
                    <Button data-testid="login-button" onClick={login} color='primary' >{loginLoading ? <CircularProgress size="1rem" /> : "Login"}</Button>
                    <Button onClick={handleOpen}>Register</Button>
                </Box>
            </Grid>
            <React.Fragment>
                <Modal
                    data-cy="register-modal-container"
                    open={openRegister}
                    onClose={handleClose}
                >
                    <Box sx={{ ...modalStyle, width: 280, height: 420 }}>
                        <h2>Create An Account"</h2>
                        <TextField required helperText={!regUsername ? "Username is required" : "" || usernameError ? usernameErrorMsg : ""} error={usernameError || !regUsername} onChange={(e) => { setRegUsername(e.target.value) }} className={style.textfield} label="username" placeholder="Enter Desired Username..." inputProps={propColor} InputLabelProps={propColor} data-testid='test-username-field' />
                        <TextField required helperText={!regEmail ? "Email is required" : ""} error={!regEmail} onChange={(e) => { setRegEmail(e.target.value) }} className={style.textfield} label="email" placeholder="Enter Email..." inputProps={propColor} InputLabelProps={propColor} data-testid='test-email-field' />
                        <TextField type='password' required helperText={!regPassword ? "Password is required" : ""} error={!regPassword} onChange={(e) => { setRegPassword(e.target.value) }} className={style.textfield} label="password" placeholder="Choose Password..." inputProps={propColor} InputLabelProps={propColor} data-testid='test-password-field' />
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <Button data-testid="register-submit" onClick={createAccount}>{loading ? <CircularProgress size="1rem" /> : "Create Account"}</Button>
                            <Button onClick={() => {
                                handleClose();
                                setRegEmail("");
                                setRegUsername("");
                                setRegPassword("");
                            }}>Close</Button>
                        </Box>
                    </Box>
                </Modal>
                <Modal
                    data-cy="login-message-modal-container"
                    open={openMessage}
                    onClose={() => { setOpenMessage(false) }}

                >
                    <Box className={style.modalBox} sx={{ ...modalStyle }}>
                        <Typography data-cy="register-modal-title" data-testid='register-modal-title' id="modal-modal-title" variant="h5" component="h2">
                            {modalTitle}
                        </Typography>
                        <Typography data-cy="register-modal-body" data-testid="register-modal-body" id="modal-modal-description" sx={{ mt: 2, color: "orange", display: "flex", justifyContent: "center" }}>
                            {modalBody}
                        </Typography>
                    </Box>
                </Modal>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Login