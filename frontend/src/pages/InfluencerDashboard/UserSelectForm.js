// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Category from '../../components/Category/Category'
import Hashtags from '../../components/Hashtags/Hashtags';

const UserSelectForm = ({ onDataChange }) => {

    const handleChange = (data) => {
        onDataChange(data);
    }
    
    return (
        <>
            <Category onCategoryChange={handleChange}/>
            <Hashtags onHashtagChange={handleChange}/>
        </>
    );
}

export default UserSelectForm;

