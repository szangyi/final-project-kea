// --------------------------
// REACT ---------------
// --------------------------
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from "@mui/material/Box";
import { Stack } from '@mui/material';
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
// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from '../../components/Banner/Banner';
import Loader from '../../components/Loader/Loader'
import MyCustomButton from '../../components/Button/Button';
import GetInfluencerProfilesAPI from '../../api/GetInfluencerProfilesAPI'
import DeleteProfileAPI from '../../api/DeleteProfileAPI';
import ErrorPage from '../ErrorPage';

const InfluencerPage = () => {

  // VARIABLES ---------------
  const [influencerData, setInfluencerData] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  // HANDLERS ---------------
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // API CALLS ---------------
  GetInfluencerProfilesAPI(setInfluencerData, setErrorMessage)
  const handleDelete = (influencerid) => {
    DeleteProfileAPI(influencerid, handleClose, setErrorMessage)
  }


  if (errorMessage) {
    return <ErrorPage error={errorMessage} />
}

  // RETURN --------------- 
  return (
    <>

      <Banner variant="medium" headline1="Influence people!" />
      <Box
        component="section"
        className="influencerdashboard-section bannerPadding"
        sx={{ pt: { xs: 5, md: 5 }, pb: { xs: 2, md: 5 }, minHeight: { xs: '200px', md: '500px' } }}>

        {influencerData === null ? (
          <Loader />

        ) : (
          <>

            {influencerData.result === "no profile" ? (
            <Stack
              sx={{
                width: '100%',
                display: 'flex',
                direction: 'column',
                alignItems: 'center'
              }}>
              <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="h3">Step into the spotlight with effortless ease!</Typography>
              <Typography sx={{ pt: { xs: 1, md: 1 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="p">Create your first profile, and become recognizable.</Typography>
              <MyCustomButton href="/create-profile" sx={{ mt: 4 }} startIcon={<AddIcon />}>Add your first profile</MyCustomButton>
            </Stack>
            ) : (

            <Box className="glassmorphism" sx={{ gap: 2, flexGrow: 1, py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 8 }, display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="h2">Your profiles </Typography>
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
                          sx={{ height: 50, width: 50, borderRadius: '50%' }}
                        />
                      </TableCell>
                      <TableCell >{array[2]}</TableCell>
                      <TableCell >{array[10]}</TableCell>
                      <TableCell >
                        <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                          {array[5] && (
                            <div>
                              <a href={`/${array[5]}`}>WEB</a>
                            </div>
                          )}
                          {array[6] && (
                            <div>
                              <a href={`/${array[6]}`}>IG</a>
                            </div>
                          )}
                          {array[7] && (
                            <div>
                              <a href={`/${array[6]}`}>YT</a>
                            </div>
                          )}
                          {array[8] && (
                            <div>
                              <a href={`/${array[6]}`}>TT</a>
                            </div>
                          )}
                        </Stack>
                      </TableCell>
                      <TableCell align="right">
                        <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1 }} >
                          <MyCustomButton variant="tertiary" href="#">
                            Edit
                          </MyCustomButton>
                          <MyCustomButton variant="tertiary" component={Link} to={`/profile/${array[2]}`} >
                            Preview
                          </MyCustomButton>
                          <MyCustomButton variant="tertiary"
                            onClick={() => {
                              handleOpen();
                            }}>
                            Delete
                          </MyCustomButton>

                          <Dialog
                            open={open}
                            className="ekdfjelkfjeklfj"
                            onClose={handleClose}
                            aria-labelledby="draggable-dialog-title">
                            <DialogTitle>
                              Are you sure you want to delete this profile?
                            </DialogTitle>
                            <DialogActions>
                              <MyCustomButton variant="tertiary" autoFocus onClick={handleClose}>
                                Cancel
                              </MyCustomButton>
                              <MyCustomButton variant="danger" onClick={() => handleDelete(array[0])} >Delete</MyCustomButton>
                            </DialogActions>
                          </Dialog>
                        </Stack>
                      </TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            )}
          </>
        )}

      </Box>
    </>
  );

}

export default InfluencerPage;