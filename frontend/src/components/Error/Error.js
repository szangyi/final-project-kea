// --------------------------
// REACT ---------------
// --------------------------
import React from 'react';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import errorImage from '../../public/icons/errorImage.png'


// --------------------------
// STYLES ---------------
// --------------------------
import "./Error.css"


const ErrorComponent=({ error, onClose })=> {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        onClose();
      };
    
    
    return (
        <Snackbar className="alertApi" open={true} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="error"
            sx={{borderRadius: '20px'}}
          >
            <Stack>
              <img sx={{width:'200px'}} src={errorImage} alt="error" />
              <Typography sx={{ pt: 1, pb: 1, textAlign:'center'}} variant="h3">{error.response.status} </Typography>
              <Typography sx={{ pb: 1, textAlign:'center', fontSize: '20px'}} variant="overline"> {error.response.data}</Typography>
            </Stack>
          </MuiAlert>
        </Snackbar>
      );
    };

export default ErrorComponent;