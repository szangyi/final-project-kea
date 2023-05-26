// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';
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
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from '../../components/Banner/Banner';
import Loader from '../../components/Loader/Loader'
import DeleteProfile from "../../components/Influencer/ProfileActions/DeleteProfile";
import MyCustomButton from '../../components/Button/Button';

const InfluencerPage = () => {

  // CONSTANTS ---------------
  const [influencerData, setInfluencerData] = useState(null);
  const token = Cookies.get('token');

  // CONNECT TO API ---------------
  const getInfluencerData = async () => {
    try {
      const response = await axios.get('/api/get-influencer', {
        headers: {
          Authorization: `${token}`,
        }
      });
      const influencerData = response.data;
      setInfluencerData(influencerData);

    } catch {
      console.log('Error');
    }
  };

  getInfluencerData();

  // DELETE PROFILE ---------------
  const deleteProfile = (profileID) => {
    console.log(`Deleting profile with ID ${profileID}`);
  };

  // RETURN --------------- 
  return (
    <>
      <Banner variant="medium" headline1="Influence people!" />
      <Box
        component="section"
        className="influencerdashboard-section bannerPadding"
        sx={{ pt: { xs: 5, md: 5 }, pb: { xs: 2, md: 5 }, minHeight: {xs: '200px', md:'500px'} }}>

        {influencerData === null ? (
          <Loader />
        ) : (
          influencerData.result === "no profile" ? (
            <Stack
              sx={{
                width: '100%',
                display: 'flex',
                direction: 'column',
                alignItems: 'center'
              }}>
              <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="h3">Step into the spotlight with effortless ease!</Typography>
              <Typography sx={{ pt: { xs: 1, md: 1 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="p">Create your first profile, and become recognizable.</Typography>
              <MyCustomButton href="/create-profile" sx={{mt: 4}} startIcon={<AddIcon />}>Add your first profile</MyCustomButton>
            </Stack>
          ) : (

            <Box className="glassmorphism" sx={{ gap: 2, flexGrow: 1, py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 8 }, display: 'flex' }}>
              <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="h2">Your profiles </Typography>
              <TableContainer component={Paper} elevation={0}>
                <Table sx={{ minWidth: 650 }} >
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Category</TableCell>
                      <TableCell align="right">Linked accounts</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell >
                        <Button href="/create-profile" variant="outlined" startIcon={<AddIcon />}>
                          Add new profile
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {influencerData.map((array, index) => (

                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <Box
                            component="img"
                            src={`http://127.0.0.1:7878/profile_images/${array[11]}`}
                            sx={{ height: 50, width: 50, borderRadius: '50%', mx: 'auto', my: { xs: 5, sm: 10 } }}
                          />
                        </TableCell>
                        <TableCell align="right">{array[2]}</TableCell>
                        <TableCell align="right">{array[10]}</TableCell>
                        <TableCell align="right" >
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
                              <a href={`/${array[6]}`}>TK</a>
                            </div>
                          )}

                        </TableCell>
                        <TableCell align="right">
                          <Button href="#" variant="outlined">
                            Edit
                          </Button></TableCell>

                        <TableCell align="left">
                          <Button component={Link} to={`/profile/${array[2]}`} variant="outlined" >
                            Preview
                          </Button>
                        </TableCell>
                        <TableCell align="left">

                          <DeleteProfile onDelete={deleteProfile} influencerID={array[0]} />

                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Box>
          )
        )}

      </Box>
    </>
  );

}

export default InfluencerPage;