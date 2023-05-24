import React, { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import backgroundImage from '../public/dashboard.png';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import { CATEGORYOPTIONS, HASHTAGSOPTIONS, SOCIALOPTIONS } from '../util/Constants';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';


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
    const [hashtagData, setHashtagData] = useState([]);
    const [socialData, setSocialData] = useState('All');


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategoryData(event.target.value);
    }

    const handleHashtagChange = (event, value) => {
        const selectedTags = value.map((item) => item.tag);
        setHashtagData(selectedTags)
    }

    const handleChangeSocial = (social) =>{
        setSocialData(social)
    }



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

            <Stack spacing={3} sx={{ width: 500 }}>
                <Autocomplete
                    multiple
                    id="hashtags"
                    options={HASHTAGSOPTIONS}
                    getOptionLabel={(option) => (option && option.tag) || ''}
                    onChange={handleHashtagChange}
                    value={HASHTAGSOPTIONS.filter(option => hashtagData.includes(option.tag))}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Search with tags"
                            placeholder="Tags"
                        />
                    )}
                />
            </Stack>


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
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
                        {SOCIALOPTIONS.map((social, index) => (
                            <Box key={index} >
                                <Button onClick={() => handleChangeSocial(social["social"])}>{social["social"]}</Button>
                            </Box>

                        ))}
                    </Box>
                    <CollectionCard searchQuery={searchQuery} searchCategory={categoryData} searchHashtag={hashtagData} searchSocial={socialData} />
                </Box>
            </Box>


        </React.Fragment>
    )

}

export default CollectionPage;