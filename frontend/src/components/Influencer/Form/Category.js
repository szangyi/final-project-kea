import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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

const Category = () => {

    return (
        <Autocomplete
        disablePortal
        id="category"
        options={categoryOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Category" />}
      />
    );
  
  
  }
  
export default Category;
  
  
  


  