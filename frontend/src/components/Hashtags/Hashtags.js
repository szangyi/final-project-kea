// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Autocomplete from '@mui/material/Autocomplete';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import { HASHTAGSOPTIONS } from '../../util/Constants';
import MyCustomTextField from "../Form/TextField";



const Hashtags = ({onHashtagChange}) => {
    const [hashtagData, setHashtagData] = useState([]);

    const handleChange = (event, value) => {
        const selectedTags = value.map((item) => item.tag);
        setHashtagData(selectedTags);
        onHashtagChange({hashtag:selectedTags}); 
    }



    return (
            <Autocomplete
                sx={{pt:3, pb:3}}
                multiple
                id="hashtags"
                options={HASHTAGSOPTIONS}
                getOptionLabel={(option) => (option && option.tag) || ''}
                onChange= {handleChange}
                value = {hashtagData.tag}
                renderInput={(params) => (
                    <MyCustomTextField
                        {...params}
                        variant="standard"
                        label="Chose your hashtags"
                        placeholder="Hashtags"
                    />
                )}
            />
    );
};

export default Hashtags;

