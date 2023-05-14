import React, { useState } from 'react';

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MyCustomTextField from "../../Form/TextField.js";

const BasicInfo = () => {


    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');

    return (
        <React.Fragment>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
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
                    <Box>
                        <MyCustomTextField
                            size="normal"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={e => setUsername(e.target.value)}
                        />
                        <MyCustomTextField
                            size="normal"
                            margin="normal"
                            required
                            fullWidth
                            name="location"
                            label="Location"
                            type="text"
                            id="location"
                            autoComplete="location"
                            onChange={e => setLocation(e.target.value)}
                        />
                                                <MyCustomTextField
                            size="normal"
                            margin="normal"
                            required
                            fullWidth
                            name="bio"
                            label="Write about yourself"
                            type="text"
                            id="bio"
                            autoComplete="bio"
                            onChange={e => setBio(e.target.value)}
                        />

                    </Box>
                </Box>
            </Container>

        </React.Fragment>

    ); 


}

export default BasicInfo;


