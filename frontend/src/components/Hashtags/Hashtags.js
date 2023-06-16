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



const Hashtags = ({ onHashtagChange, filter, helperText, error }) => {

    // VARIABLES ---------------
    const [hashtagData, setHashtagData] = useState([]);

    // HANDLING CHANGE ---------------
    const handleHashtagChange = (event, value) => {
        const selectedTags = value.map((item) => item.tag);
        setHashtagData(selectedTags);
        onHashtagChange(selectedTags);

        // Different handling of data based on which context the component is used in
        if (filter) {
            onHashtagChange({hashtag:selectedTags}); 
        } else {
            onHashtagChange(selectedTags);
        }
    }


    return (
        <Autocomplete
            sx={{ width: '100%' }}
            multiple
            id="hashtags"
            options={HASHTAGSOPTIONS}
            getOptionLabel={(option) => (option && option.tag) || ''}
            onChange={handleHashtagChange}
            value={filter ? HASHTAGSOPTIONS.filter(option => hashtagData.includes(option.tag)) : hashtagData.tag}
            renderInput={(params) => (
                <MyCustomTextField
                    {...params}
                    variant="standard"
                    className="tags"
                    label="Choose hashtags"
                    helperText={helperText}
                    error={error}
                />
            )}
        />
    );
};


export default Hashtags;

