// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import MyCustomAutocomplete from './AutoComplete';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomTextField from "../Form/TextField";
import { LOCATION } from '../../util/Constants';

const Location = ({ onLocationChange, helperText, error }) => {

    // VARIABLES ---------------
    const [locationData, setLocationData] = useState(null)

    // HANDLE CHANGE ---------------
    const handleLocationChange = (event, value) => {
        setLocationData(value);
        onLocationChange(value && value.label ? value.label : '');
    }


    return (
        <MyCustomAutocomplete
            id="country-select"
            options={LOCATION}
            // autoHighlight
            autoFocus
            getOptionLabel={(option) => (option && option.label) || ''}
            onChange={handleLocationChange}
            value={locationData}
            renderOption={(props, option) => (
                <Box component="li" sx={{ fontSize: '14px', '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label} ({option.code})
                </Box>
            )}
            renderInput={(params) => (
                <MyCustomTextField
                sx={{fontSize: '14px', height: '45px'}}
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                    }}
                    helperText={helperText}
                    error={error}
                />
            )}
        />
    );
}

export default Location;
