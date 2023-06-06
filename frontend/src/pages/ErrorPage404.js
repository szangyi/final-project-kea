import { styled } from '@mui/material/styles';
import { Typography, Container } from '@mui/material';
import errorImage from '../assets/error.png'
import MeshGradient from '../components/MeshGradient/MeshGradient';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useRouteError } from 'react-router-dom';
// import MeshGradientBackground from '../components/MeshGradient/MeshGradientBackground';



// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 580,
    height: '90%',
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
}));


// ----------------------------------------------------------------------

export default function ErrorPage404() {

    let statusCode ='404'
    let message = 'Ooops! Page not found!';


    return (
        <>

            <MeshGradient variant="full"></MeshGradient>

            <Container sx={{ height: 'calc(100vh - 64px)' }}>
                <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Typography sx={{ color: 'white' }} variant="h1" paragraph>
                        {statusCode}
                    </Typography>

                    <Typography sx={{ color: 'text.primary' }}>
                        {message}
                    </Typography>

                    <img style={{ height: '200px', width: 'auto', marginTop: '30px' }} src={errorImage} alt="error" />


                </StyledContent>
            </Container>
        </>
    );
}