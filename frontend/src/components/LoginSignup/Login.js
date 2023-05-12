import '../../style/style.css'

import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import MyCustomButton from "../Button/Button";
import MyCustomTextField from "../Form/TextField";
import MeshGradient from '../MeshGradient/MeshGradient';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
    
    const loginHandler = async(event) =>{
        event.preventDefault();
        try {
            const response = await axios.post('/login', { email, password });
            const token = response.data.jwt;
            const error = response.data.error;

            
            if (token){
                Cookies.set('token', token, { expires: expirationDate });
                nav('/home');
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
                    <Typography component="h2" variant="h4" sx={{ mb: 2 }} >
                        log in
                    </Typography>
                    <Box component="form" onSubmit={loginHandler} noValidate sx={{ mt: 1 }}>
                        <MyCustomTextField
                            // component="input"
                            size="normal"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={e => setEmail(e.target.value)}
                        />
                        <MyCustomTextField
                            // component="input"
                            size="normal"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <MyCustomButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, }}
                        >
                            Log me in
                        </MyCustomButton>

                        <Link href="#" variant="body2" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            {"Don't have an account? Sign Up"}
                        </Link>

                    </Box>
                </Box>
            </Container>

        </React.Fragment>


        // Alanis code

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