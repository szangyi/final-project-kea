import React, { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import backgroundImage from '../public/dashboard.png';


const CollectionPage = () => {


    return (
        <React.Fragment>
            <Container maxWidth="xl" >


                <Box
                    sx={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '200px',
                        width: '100%',
                    }}
                >
                    Influence people
                </Box>

                <Container>
                    ndkej
                </Container>

            </Container>
        </React.Fragment>
    )

}

export default CollectionPage;