// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Category from '../../components/Category/Category'
import Hashtags from '../../components/Hashtags/Hashtags';

const InfleuncerSelectForm = ({ values, handleChange, touched, errors }) => {

    const handleHashtagChange = (value) => {
        handleChange({ target: { name: 'hashtag', value } });
    };


    const handleCategoryChange = (value) => {
        handleChange({ target: { name: 'category', value } });
    };

    return (
        <>
            <Typography variant="h6" sx={{ fontWeight: 600}}> Category selection </Typography>

            <Box sx={{ my: 3, mb: 6 }}>
                <Category
                    onCategoryChange={handleCategoryChange}
                    value={values.category}
                    error={touched.category && Boolean(errors.category)}
                    helperText={touched.category && errors.category}
                />

                <Hashtags
                    onHashtagChange={handleHashtagChange}
                    value={values.hashtag}
                    error={touched.hashtag && Boolean(errors.hashtag)}
                    helperText={touched.hashtag && errors.hashtag}
                />
            </Box>
        </>
    );
}

export default InfleuncerSelectForm;


