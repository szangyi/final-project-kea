// --------------------------
// STYLES ---------------
// --------------------------
import { styled } from '@mui/material/styles';
const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 580,
    height: '90%',
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
}));


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Typography, Container } from '@mui/material';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import errorImage from '../assets/error.png'
import MeshGradient from '../components/MeshGradient/MeshGradient';



export default function ErrorPage({ error }) {

    let statusCode = ''
    let message = 'Something went wrong!';

    if (error) {
        if (error.statusCode === 500) {
            statusCode = error.statusCode
            message = "It's not you, it's us!";
        } else {
            statusCode = error.statusCode
            message = error.message
        }
    }

    return (
        <>

            <MeshGradient variant="full"></MeshGradient>

            <Container sx={{ height: 'calc(100vh - 64px)' }}>
                <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Typography sx={{ color: 'white' }} variant="h1" paragraph>
                        Error {statusCode}
                    </Typography>

                    <Typography variant="h6" sx={{ color: 'text.primary' }}>
                        {message}
                    </Typography>

                    <img style={{ height: '200px', width: 'auto', marginTop: '30px' }} src={errorImage} alt="error" />


                </StyledContent>
            </Container>
        </>
    );
}