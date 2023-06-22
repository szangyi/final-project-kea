// --------------------------
// MATERIAL UI ---------------
// --------------------------
import {Typography, Container } from '@mui/material';


// --------------------------
// STYLES ---------------
// --------------------------
import { styled } from '@mui/material/styles';
const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '50vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));




export default function Page404() {
  return (
    <>

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
            spelling.
          </Typography>

        </StyledContent>
      </Container>
    </>
  );
}