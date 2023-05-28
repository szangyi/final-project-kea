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



const Hashtags = ({onHashtagChange, filter}) => {

    // VARIABLES ---------------
    const [hashtagData, setHashtagData] = useState([]);

    // HANDLING CHANGE ---------------
    const handleChange = (event, value) => {
        const selectedTags = value.map((item) => item.tag);
        setHashtagData(selectedTags);
        onHashtagChange({hashtag:selectedTags}); 
    }



    return (
            <Autocomplete
                multiple
                id="hashtags"
                options={HASHTAGSOPTIONS}
                getOptionLabel={(option) => (option && option.tag) || ''}
                onChange= {handleChange}
                value={filter ? HASHTAGSOPTIONS.filter(option => hashtagData.includes(option.tag)) : hashtagData}
                renderInput={(params) => (
                    <MyCustomTextField
                        {...params}
                        variant="standard"
                        label="Chose hashtags"
                        placeholder="Hashtags"
                    />
                )}
            />
    );
};


export default Hashtags;

