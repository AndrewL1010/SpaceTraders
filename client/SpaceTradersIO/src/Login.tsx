import { Grid, Paper, Avatar, TextField, Button, createTheme, ThemeProvider, CircularProgress } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import style from './Login.module.css'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';


function Login() {
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [regEmail, setRegEmail] = useState<string>("");
    const [regUsername, setRegUsername] = useState<string>("");
    const [access_token, setacesss_token] = useState<string>("");
    const defaultHeaders = { "Content-Type": "application/json" };
    const [usernameError, setUsernameError] = useState<boolean>(false);
    const [usernameErrorMsg, setUsernameErrorMsg] = useState<string>("");


    const [open, setOpen] = useState<boolean>(false);
    const [created, setCreated] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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


    const login = async () => {
        const data = {
            username: username,
            access_token: access_token,
        }
        const response = await fetch("http://localhost:5000/login",
            {
                method: "POST",
                headers: defaultHeaders,
                body: JSON.stringify(data),

            }
        )
        const result = await response.json();
        if (result === "success") {
            console.log("success");
        }
        else {
            console.log("error");
        }
    }
    const createAccount = async () => {
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
            setacesss_token(SpaceTradersResult.data.token);

            const account_data = {
                username: regUsername,
                email: regEmail,
                access_token: access_token
            }
            const response = await fetch("http://localhost:5000/register",
                {
                    method: "POST",
                    headers: defaultHeaders,
                    body: JSON.stringify(account_data)

                }
            )
            const result = await response.json();
            console.log(result);
            console.log(access_token);
            setCreated(true);

        }
        setLoading(false)




    }


    const paperStyle = { padding: 20, height: '45vh', width: 280, margin: "20px auto", backgroundColor: '#2a2a2a' };
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
                <Paper elevation={10} style={paperStyle} className={style.paper}>
                    <Grid>
                        <Avatar className={style.avatar} style={{ color: "white", backgroundColor: "orange" }}><RocketLaunchIcon></RocketLaunchIcon></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField onChange={(e) => { setUsername(e.target.value) }} className={style.textfield} label="username" placeholder="Enter Username..." inputProps={propColor} InputLabelProps={propColor} />
                    <TextField type='password' onChange={(e) => { setacesss_token(e.target.value) }} className={style.textfield} label="token" placeholder="Enter Access Token..." inputProps={propColor} InputLabelProps={propColor} />
                    <Button onClick={login} color='primary' >Login</Button>
                    <Button onClick={handleOpen}>Register</Button>
                </Paper>
            </Grid>
            <React.Fragment>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={{ ...modalStyle, width: 400, height: 400 }}>
                        <h2 style={created ? { color: "green" } : { color: "orange" }}>{created ? "Account Created" : "Create An Account"}</h2>
                        <TextField required helperText={!regUsername ? "Username is required" : "" || usernameError ? usernameErrorMsg : ""} error={usernameError || !regUsername} onChange={(e) => { setRegUsername(e.target.value) }} className={style.textfield} label="username" placeholder="Enter Username..." inputProps={propColor} InputLabelProps={propColor} />
                        <TextField required helperText={!regEmail ? "Email is required" : ""} error={!regEmail} onChange={(e) => { setRegEmail(e.target.value) }} className={style.textfield} label="email" placeholder="Enter Email..." inputProps={propColor} InputLabelProps={propColor} />
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <Button onClick={createAccount}>{loading ? <CircularProgress size="1rem" /> : "Create Account"}</Button>
                            <Button onClick={() => {
                                handleClose();
                                setCreated(false);
                                setRegEmail("");
                                setRegUsername("");
                            }}>Close</Button>
                        </Box>
                    </Box>
                </Modal>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Login