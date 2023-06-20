// --------------------------
// REACT ---------------
// --------------------------
import React, { useState, useEffect } from 'react';
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Typography, useThemeProps } from '@mui/material';
// --------------------------
// COMPONENTS ---------------
// --------------------------
import { CATEGORYOPTIONS } from '../../util/Constants';

const Category = ({ className, onCategoryChange, customFilters, filter, helperText, error }) => {

    // VARIABLES ---------------
    let initialCategoryData;

    if (customFilters) {
        initialCategoryData = customFilters
    } else if (filter) {
        initialCategoryData = 'All categories'
    } else {
        initialCategoryData = { category: '' }
    }

    const [categoryData, setCategoryData] = useState(initialCategoryData);

    // HANDLING CHANGE ---------------
    const handleCategoryChange = (event) => {
        const valueData = event.target.value;
        setCategoryData(valueData);

        // Different handling of data based on which context the component is used in
        if (filter) {
            onCategoryChange({ category: valueData });
        } else {
            onCategoryChange(valueData);
        }
    }


    return (
        <>
            <FormControl className={className} sx={{ width: '100%' }} >

                {filter ? '' : <InputLabel>Category</InputLabel>}
                <Select
                    sx={{ borderRadius: '15px', height: '45px', fontSize: '14px' }}
                    labelId="category"
                    id="category"
                    value={categoryData !== '' ? categoryData : 'All categories'}
                    label={!filter ? 'Category' : undefined}
                    onChange={handleCategoryChange}>


                    {filter && <MenuItem value="All categories" sx={{ fontSize: '14px ' }}>All Categories</MenuItem>}

                    {CATEGORYOPTIONS.map((option, index) => (
                        <MenuItem key={index} value={option.category} sx={{ fontSize: '14px' }}>
                            {option.category}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>


            {error && (
                <Typography variant="caption" color="error" sx={{ mx: 1.5 }}>
                    {helperText}
                </Typography>
            )}
        </>
    );
}
export default Category;





