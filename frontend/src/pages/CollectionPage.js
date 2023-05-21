import React, { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import backgroundImage from '../public/dashboard.png';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import CollectionCard from '../components/Influencer/CollectionCard'

const drawerWidth = 240;

const SearchBar = ({ onChange, value }) => {
    return (
        <TextField
            label="Search"
            variant="outlined"
            value={value}
            onChange={onChange}
        />
    );
};

const CollectionPage = (props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = useState('');



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };




    const drawer = (
        <div>
            <SearchBar onChange={handleSearchQueryChange} value={searchQuery} />

        </div>
    );



    return (
        <React.Fragment>
            <Container maxWidth="xl" >


                <Box
                    sx={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '200px',
                        width: '100%',
                    }}
                >
                    Influence people
                </Box>
            </Container>


            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <CollectionCard searchQuery={searchQuery}/>
                </Box>
            </Box>


        </React.Fragment>
    )

}

export default CollectionPage;