// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import { HASHTAGSOPTIONS } from '../../util/Constants';



const Hashtags = ({onHashtagChange}) => {
    const [hashtagData, setHashtagData] = useState([]);

    const handleChange = (event, value) => {
        const selectedTags = value.map((item) => item.tag);
        setHashtagData(selectedTags);
        onHashtagChange({hashtag:selectedTags}); 
    }



    return (
        <Stack spacing={3} sx={{ width: 500 }}>
            <Autocomplete
                multiple
                id="hashtags"
                options={HASHTAGSOPTIONS}
                getOptionLabel={(option) => (option && option.tag) || ''}
                onChange= {handleChange}
                value = {hashtagData.tag}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Chose your tags"
                        placeholder="Tags"
                    />
                )}
            />
        </Stack>
    );
};

export default Hashtags;

