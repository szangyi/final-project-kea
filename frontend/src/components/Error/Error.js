import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ErrorComponent=({ error, onClose })=> {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        onClose();
      };
    
    
    return (
        <Snackbar open={true} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="error"
          >
            <p>Status Code: {error.response.status}</p>
            <p>Error: {error.response.data}</p>
          </MuiAlert>
        </Snackbar>
      );
    };

export default ErrorComponent;