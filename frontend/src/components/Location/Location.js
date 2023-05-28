// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomTextField from "../Form/TextField";
import { LOCATION } from '../../util/Constants';

const Location = ({ onLocationChange }) => {

    // VARIABLES ---------------
    const [locationData, setLocationData] = useState('')

    // HANDLE CHANGE ---------------
    const handleLocationChange = (event, value) => {
        setLocationData(value.label);
        onLocationChange(value.label);
    }


    return (
        <Autocomplete
            id="country-select"
            sx={{ pb: 2}}
            options={LOCATION}
            autoHighlight
            getOptionLabel={(option) => option.label || ''}
            onChange = {handleLocationChange}
            value={locationData.label}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
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
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                    }}
                />
            )}
        />
    );
}

export default Location;
