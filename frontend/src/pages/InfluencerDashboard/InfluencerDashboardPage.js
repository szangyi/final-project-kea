// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from "@mui/material/Box";
import { Stack, Alert } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import MenuItem from '@mui/material/MenuItem';
import Skeleton from '@mui/material/Skeleton';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from '../../components/Banner/Banner';
import MyCustomButton from '../../components/Button/Button';
import GetInfluencerProfilesAPI from '../../api/GetInfluencerProfilesAPI'
import DeleteProfileAPI from '../../api/DeleteProfileAPI';
import ErrorPage from '../ErrorPage';



const InfluencerPage = () => {

    // VARIABLES ---------------
    const [influencerData, setInfluencerData] = useState(null);
    const [selectedInfluId, setSelectedInfluId] = useState(null);
    const [deleteError, setDeleteError] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = useState(null)


    // HANDLERS ---------------
    const handleOpen = (influ_id) => {
        setSelectedInfluId(influ_id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // API CALLS ---------------
    GetInfluencerProfilesAPI(setInfluencerData, setErrorMessage)
    const handleDelete = (selectedInfluId) => {
        DeleteProfileAPI(selectedInfluId, handleClose, setErrorMessage, setDeleteError);
    }


    // ERROR PAGE ---------------
    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }


    // RETURN --------------- 
    return (
        <>

            <Banner
                variant="medium"
                headline1="Make an influence!"
                miniCardsEnabledInfluencer
            />
            <Box
                component="section"
                className="influencerdashboard-section sectionPadding"
                sx={{ pt: { xs: 5, md: 5 }, pb: { xs: 2, md: 5 }, minHeight: { xs: '200px', md: '500px' } }}>

                {influencerData === null ? (
                    <>
                        <Box sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 }, width: { xs: '100%', md: '60%' }, margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: { xs: 'start', md: 'center' } }} >
                            <Skeleton width="100%" />
                            <Skeleton width="60%" />
                            <Skeleton sx={{ mt: 4 }} variant="rounded" width={100} height={30} />

                        </Box>
                    </>

                ) : (
                    <>

                        {influencerData.result === "no profile" ? (
                            <Stack
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    direction: 'column',
                                    alignItems: { xs: 'start', md: 'center' }
                                }}>
                                <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="h3">Step into the spotlight with ease!</Typography>
                                <Typography sx={{ pt: { xs: 1, md: 1 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="p">Create your first profile, and become recognizable.</Typography>
                                <MyCustomButton href="/create-profile" sx={{ mt: 4 }} startIcon={<AddIcon />}>Add your first profile</MyCustomButton>
                            </Stack>
                        ) : (

                            <>
                                {deleteError && (
                                    <Alert severity="error">{deleteError}</Alert>
                                )}

                                <Box sx={{ gap: 2, flexGrow: 1, py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 8 }, display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="h3">Your profiles </Typography>
                                    <TableContainer>
                                        <Table  >
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell >Name</TableCell>
                                                    <TableCell >Category</TableCell>
                                                    <TableCell >Linked accounts</TableCell>
                                                    <TableCell align="right" >
                                                        <MyCustomButton href="/create-profile" startIcon={<AddIcon />}>
                                                            Add new profile
                                                        </MyCustomButton>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {influencerData.map((array, index) => (

                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >

                                                        <TableCell>
                                                            <Box
                                                                component="img"
                                                                src={`https://influncr.pythonanywhere.com/images/profile_images/${array[11]}`}
                                                                // src={`http://127.0.0.1:7878/profile_images/${array[11]}`}
                                                                sx={{ height: 50, width: 50, objectFit: 'cover', borderRadius: '50%' }}
                                                            />
                                                        </TableCell>
                                                        <TableCell >{array[2]}</TableCell>
                                                        <TableCell >{array[10]}</TableCell>
                                                        <TableCell >
                                                            <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                                                                {array[5] && (
                                                                    <div>
                                                                        <a href={array[5]}><LanguageIcon fontSize="small" /></a>
                                                                    </div>
                                                                )}
                                                                {array[6] && (
                                                                    <div>
                                                                        <a href={array[6]}><InstagramIcon fontSize="small" /></a>
                                                                    </div>
                                                                )}
                                                                {array[7] && (
                                                                    <div>
                                                                        <a href={array[7]}><YouTubeIcon fontSize="small" /></a>
                                                                    </div>
                                                                )}
                                                                {array[8] && (
                                                                    <div>
                                                                        <a href={array[8]}><MusicVideoIcon fontSize="small" /></a>
                                                                    </div>
                                                                )}
                                                            </Stack>
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1 }} >

                                                                <MenuItem
                                                                    disableRipple
                                                                    component={Link}
                                                                    variant="navlink"
                                                                    to={`/edit-profile/${array[2]}`}
                                                                    sx={{ p: 0, width: 'fit-content', m: 0, my: 2, mr: 3, color: 'primary.main', fontWeight: 600, display: 'block', }}
                                                                >
                                                                    Edit
                                                                </MenuItem>
                                                                <MenuItem
                                                                    disableRipple
                                                                    component={Link}
                                                                    variant="navlink"
                                                                    to={`/profile/${array[2]}`}
                                                                    sx={{ p: 0, width: 'fit-content', m: 0, my: 2, mr: 3, color: 'primary.main', fontWeight: 600, display: 'block', }}
                                                                >
                                                                    Preview
                                                                </MenuItem>
                                                                <MenuItem
                                                                    disableRipple
                                                                    variant="navlink"
                                                                    onClick={() => { handleOpen(array[0]) }}
                                                                    sx={{ p: 0, width: 'fit-content', m: 0, my: 2, color: 'primary.main', fontWeight: 600, display: 'block', }}
                                                                >
                                                                    Delete
                                                                </MenuItem>



                                                            </Stack>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}

                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="draggable-dialog-title"
                                                >


                                                    <DialogTitle >
                                                        Are you sure you want to delete this profile?
                                                    </DialogTitle>
                                                    <DialogActions >
                                                        <MyCustomButton variant="secondary" autoFocus onClick={handleClose}>
                                                            Cancel
                                                        </MyCustomButton>
                                                        <MyCustomButton variant="danger" onClick={() => handleDelete(selectedInfluId)} >Delete</MyCustomButton>
                                                    </DialogActions>
                                                </Dialog>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </>
                        )}
                    </>
                )}

            </Box>
        </>
    );

}

export default InfluencerPage;