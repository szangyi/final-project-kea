import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";
import { CATEGORYOPTIONS } from '../../util/Constants';

const Category = ({onCategoryChange}) => {
    const [categoryData, setCategoryData] = useState({
        category: ''
    }
    )

    const handleChange = (event, value) => {
        setCategoryData({ category: value });
        onCategoryChange(value); 
    }
    return (
        <Container component="main" maxWidth="sm">

            <Autocomplete
                disablePortal
                id="category"
                options={CATEGORYOPTIONS}
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





