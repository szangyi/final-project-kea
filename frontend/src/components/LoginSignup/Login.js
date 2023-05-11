import '../../style/style.css'

import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

// import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import BokehBackground from '../BokehBackground';
import MyCustomButton from "../Button/Button";
import MyCustomTextField from "../Form/TextField";
import MeshGradient from '../MeshGradient/MeshGradient';


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
            <MeshGradient></MeshGradient>
            {/* <BokehBackground variant="bg light" /> */}

            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        // boxShadow: 3,
                        borderRadius: 1,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#FFFF"
                    }}
                >
                    <Typography component="h2" variant="h4" sx={{ mb: 5 }} >
                        Log in
                    </Typography>
                    <Box component="form" onSubmit={loginHandler} noValidate sx={{ mt: 1 }}>
                        <MyCustomTextField
                            size="normal"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <MyCustomTextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <MyCustomButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log me in
                        </MyCustomButton>

                        <Link href="#" variant="body2" sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                            {"Don't have an account? Sign Up"}
                        </Link>

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
