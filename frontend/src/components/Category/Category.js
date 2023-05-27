import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { CATEGORYOPTIONS } from '../../util/Constants';
import MyCustomTextField from "../Form/TextField";

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

            <Autocomplete
                disablePortal
                id="category"
                options={CATEGORYOPTIONS}
                getOptionLabel={(option) => option ? option.category : ''}
                sx={{ width: 300 }}
                renderInput={(params) => <MyCustomTextField {...params} label="Category" />}
                onChange={handleChange}
                value = {categoryData.category}
            />

    );


}

export default Category;





