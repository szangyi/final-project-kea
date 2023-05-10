import '../../style/style.css'

import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import BokehBackground from '../BokehBackground';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const loginHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/login', { email, password });
            const token = response.data.jwt;
            const error = response.data.error;

            if (token) {
                Cookies.set('token', token, { expires: 1 });
                nav('/account-info');
            }
            else {
                console.log(error)
            }

        } catch (error) {
            console.error('Login failed:', error.response.error);
        }
    }


    return (
        <React.Fragment>
            <BokehBackground variant="bg light" />

            <Container component="main" maxWidth="sm">
                <Box  className="test"
                    sx={{
                        // boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#FFFF"
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={loginHandler} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>

        </React.Fragment>

        // <React.Fragment>

        //     <form onSubmit={loginHandler}>
        //         <label>Email</label>
        //         <input type="email" placeholder="" onChange={e => setEmail(e.target.value)}></input>
        //         <label>Password</label>
        //         <input type="password" placeholder="" onChange={e => setPassword(e.target.value)}></input>

        //         <button>Submit</button>
        //     </form>
        // </React.Fragment>
    );
};


export default Login;
