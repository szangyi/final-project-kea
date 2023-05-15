import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { Grid } from '@mui/material';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import MyCustomButton from "../Button/Button";
import MyCustomTextField from "../Form/TextField";
import MeshGradient from '../MeshGradient/MeshGradient';


const Signup = () => {

    const [username, setEnteredUsername] = useState('');
    const [firstName, setEnteredFirstName] = useState('');
    const [lastName, setEnteredLastName] = useState('');
    const [email, setEnteredEmail] = useState('');
    const [password, setEnteredPassword] = useState('');
    const nav = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/signup', { username, firstName, lastName, email, password });
            const message = response.data.message;

            if (message == "success") {
                nav('/login');
            }
            else {
                console.log(message)
            }

        } catch (error) {
            console.error('Signup failed');
        }


    }


    return (


        <React.Fragment>
            <MeshGradient></MeshGradient>

            <Container component="main" maxWidth="md">
                <Box 
                    sx={{
                        // boxShadow: 3,
                        borderRadius: 1,
                        px: 4,
                        py: 6,
                        marginTop: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#FFFF",
                        width: '100%',
                    }}
                >
                    <Typography component="h2" variant="h4" sx={{ mb: 2 }} >
                        sign up
                    </Typography>
                    <Box fullWidth component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1, width: '100%' }}>

                        <Grid container spacing={1}>
                            <Grid item xs={6} fullWidth>
                                <MyCustomTextField
                                    size="normal"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="First Name"
                                    name="firstname"
                                    autoFocus
                                    onChange={e => setEnteredFirstName(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <MyCustomTextField
                                    size="normal"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Last Name"
                                    name="lastname"
                                    autoFocus
                                    onChange={e => setEnteredLastName(e.target.value)}
                                />
                            </Grid>

                        </Grid>

                        <MyCustomTextField
                            size="normal"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="UserName"
                            name="username"
                            autoFocus
                            onChange={e => setEnteredUsername(e.target.value)}
                        />

                        <Grid container spacing={1}>
                            <Grid item xs={6} fullWidth>

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
                                    onChange={e => setEnteredEmail(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={6}>

                                <MyCustomTextField
                                    size="normal"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={e => setEnteredPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>

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
                            Sign up
                        </MyCustomButton>

                        <Link href="#" variant="body2" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            {"I already have an account, I want to log in!"}
                        </Link>

                    </Box>
                </Box>
            </Container>

        </React.Fragment>


        // Alanis code

        // <form onSubmit={submitHandler}>
        //     <label>First name</label>
        //     <input type="text" placeholder="" onChange={e => setEnteredFirstName(e.target.value)}></input>  

        //     <label>Last name</label>
        //     <input type="text" placeholder="" onChange={e => setEnteredLastName(e.target.value)}></input> 

        //     <label>Username</label>
        //     <input type="text" placeholder="" onChange={e => setEnteredUsername(e.target.value)}></input> 

        //     <label>Email</label>
        //     <input type="email" placeholder="" onChange={e => setEnteredEmail(e.target.value)}></input>   

        //     <label>Password</label>
        //     <input type="password" placeholder="" onChange={e => setEnteredPassword(e.target.value)}></input>  

        //     <button>Submit</button>
        // </form>
    );
};

export default Signup;