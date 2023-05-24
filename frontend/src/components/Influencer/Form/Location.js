import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { LOCATION } from '../../../util/Constants';

const Location = ({ onLocationChange }) => {

    const [locationData, setLocationData] = useState('')

    const handleLocationChange = (even, value) => {
        setLocationData(value.label);
        onLocationChange(value.label);
    }


    return (
        <Autocomplete
            id="country-select"
            sx={{ width: 300 }}
            options={LOCATION}
            autoHighlight
            getOptionLabel={(option) => option ? option.label : ''}
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
                <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    );
}

export default Location;
