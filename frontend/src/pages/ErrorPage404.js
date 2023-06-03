import { styled } from '@mui/material/styles';
import { Typography, Container } from '@mui/material';
import errorImage from '../assets/error.png'
import MeshGradient from '../components/MeshGradient/MeshGradient';
import { useLocation } from 'react-router-dom';



// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    height: '90%',
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
}));


// ----------------------------------------------------------------------

export default function ErrorPage404({ message, statusCode }) {

    console.log({ statusCode })

    return (
        <>
            <MeshGradient variant="full"></MeshGradient>

            {/* <Container sx={{height: 'calc(100vh - 64px)'}}> */}
            <Container sx={{ height: 'calc(100vh - 64px)' }}>
                <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Typography sx={{ color: 'white' }} variant="h1" paragraph>
                        {/* 404 */}
                        {statusCode}
                    </Typography>

                    <Typography sx={{ color: 'text.primary' }}>
                        {message}
                        {/* Ooops! It's not you, it's us! */}
                    </Typography>

                    <img style={{ height: '200px', width: 'auto', marginTop: '30px' }} src={errorImage} alt="error" />


                </StyledContent>
            </Container>
        </>
    );
}