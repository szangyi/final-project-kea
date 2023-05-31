// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// --------------------------
// COMPONENTS ---------------
// --------------------------
import { CATEGORYOPTIONS } from '../../util/Constants';

const Category = ({ onCategoryChange, filter }) => {

    // VARIABLES ---------------
    const initialCategoryData = filter ? 'All categories' : { category: '' };
    const [categoryData, setCategoryData] = useState(initialCategoryData);

    // HANDLING CHANGE ---------------
    const handleChange = (event) => {
        const valueData = event.target.value;
        console.log(valueData)

        setCategoryData(valueData);
        onCategoryChange({category:valueData});
    }


    return (
        <>
            <FormControl sx={{pb:2, width:'100%'}}>
                <InputLabel>Category</InputLabel>
                <Select
                    sx={{borderRadius:'15px'}}
                    labelId="category"
                    id="category"
                    value={categoryData !== '' ? categoryData : 'All categories'}
                    label="Category"
                    onChange={handleChange}>

                    {filter && <MenuItem value="All categories">All Categories</MenuItem>}
                    
                    {CATEGORYOPTIONS.map((option, index) => (
                        <MenuItem key={index} value={option.category}>
                            {option.category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}
export default Category;





