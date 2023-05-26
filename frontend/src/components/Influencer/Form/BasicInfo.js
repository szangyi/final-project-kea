import React, { useState } from 'react';

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MyCustomTextField from "../../Form/TextField.js";
import Location from './Location.js';

const BasicInfo = ({onDataChange}) => {

    const [basicData, setBasicData] = useState({
        username:'',
        bio: ''
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setBasicData((prevData) => ({ ...prevData, [name]: value }));
        onDataChange(basicData); 
    }

    const handleLocationChange = (data) =>{
        onDataChange({location:data});
    }

 



    return (
        <>
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
                            value = {basicData.username}
                            onChange={handleChange}
                        />

                        <Location onLocationChange={handleLocationChange}/>

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
                            value = {basicData.bio}
                            onChange={handleChange}
                        />

                    </Box>
                </Box>
                </>

    ); 


}

export default BasicInfo;


