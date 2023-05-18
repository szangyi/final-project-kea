import "./Influencer.css"
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Image from '@mui/icons-material/Image'



const Profiles = (props) => {


    const influencerData = props.influencerData;
    return (
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
                            <img className="profile-image" src= {`http://127.0.0.1:7878/profile_images/${array[12]}`} alt="Profile image" />
                            </TableCell>
                            <TableCell align="right">{array[2]}</TableCell>
                            <TableCell align="right">{array[10]}</TableCell>
                            <TableCell align="right" >
                                {array[5] && (
                                    <div>
                                        <a href={`/${array[5]}`}>WEB</a>
                                    </div>
                                )}
                                { array[6] && (
                                    <div>
                                        <a href={`/${array[6]}`}>IG</a>
                                    </div>
                                )}
                                { array[7] && (
                                    <div>
                                        <a href={`/${array[6]}`}>YT</a>
                                    </div>
                                )}
                                { array[8] && (
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
                                <Button href="#" variant="outlined" >
                                    Preview
                                </Button>
                            </TableCell>
                            <TableCell align="left">
                                <Button href="#" variant="outlined">
                                    Delete
                                </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );




}

export default Profiles;


