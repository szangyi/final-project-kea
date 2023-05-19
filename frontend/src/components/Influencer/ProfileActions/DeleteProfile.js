import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Cookies from 'js-cookie';
import axios from 'axios';


const DeleteProfile = ({ onDelete, influencerID }) => {

    const [open, setOpen] = React.useState(false);
    const token = Cookies.get('token');


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/delete-profile', {influencerID}, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response) {
                onDelete(influencerID);
                handleClose();
            }
            else {
                console.log("error")
            }
        } catch {
            console.log('Delete of profile failed');
        }

    };

    return (
        <Box>
            <Button
                variant="outlined"
                onClick={() => {
                    handleOpen();
                }}>
                Delete
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title">
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Are you sure you want to delete this profile?
                </DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );



}

export default DeleteProfile;




