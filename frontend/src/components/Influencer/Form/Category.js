import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";

const categoryOptions = [
    { category: 'Beauty' },
    { category: 'Fashion' },
    { category: 'Health' },
    { category: 'Travel' },
    { category: 'Personal development' },
    { category: 'Business' },
    { category: 'Food' },
    { category: 'Pets' },
    { category: 'Sports' },
    { category: 'Lifestyle' },
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
                getOptionLabel={(option) => option ? option.category : ''}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Category" />}
                onChange={handleChange}
                value = {categoryData.category}
            />

        </Container>
    );


}

export default Category;





