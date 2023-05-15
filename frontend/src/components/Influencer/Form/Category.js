import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Hashtags from './Hashtags';
import Container from "@mui/material/Container";

const categoryOptions = [
    { label: 'Beauty' },
    { label: 'Fashion' },
    { label: 'Health' },
    { label: 'Travel' },
    { label: 'Personal development' },
    { label: 'Business' },
    { label: 'Food' },
    { label: 'Pets' },
    { label: 'Sports' },
    { label: 'Lifestyle' },
]

const Category = ({onDataChange}) => {
    const [categoryData, setCategoryData] = useState({
        category: ''
    }
    )

    const handleChange = (event, value) => {
        setCategoryData({ category: value });
        onDataChange(value); 
    }
    return (
        <Container component="main" maxWidth="sm">

            <Autocomplete
                disablePortal
                id="category"
                options={categoryOptions}
                getOptionLabel={(option) => option.label}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Category" />}
                onChange={handleChange}
                value = {categoryData.label}
                defaultValue={categoryOptions[0]}
            />
                  <Hashtags/>

        </Container>
    );


}

export default Category;





