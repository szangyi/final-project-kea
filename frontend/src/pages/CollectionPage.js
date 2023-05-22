import React, { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import backgroundImage from '../public/dashboard.png';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import { CATEGORYOPTIONS } from '../util/Constants';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

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

const CollectionPage = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryData, setCategoryData] = useState('All categories')




    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategoryData(event.target.value);
    }

    

    console.log(categoryData)


    const drawer = (
        <div>
            <SearchBar onChange={handleSearchQueryChange} value={searchQuery} />

            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                    labelId="category"
                    id="category"
                    value={categoryData || 'All categories'}
                    label="Category"
                    onChange={handleCategoryChange}
                >
                    <MenuItem value="All categories">All Categories</MenuItem>

                    {CATEGORYOPTIONS.map((option, index) => (
                        <MenuItem key={index} value={option.category}>
                            {option.category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

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
                    <CollectionCard searchQuery={searchQuery} searchCategory={categoryData} />
                </Box>
            </Box>


        </React.Fragment>
    )

}

export default CollectionPage;