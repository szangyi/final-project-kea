// --------------------------
// REACT ---------------
// --------------------------
import React, { useState, useEffect } from 'react';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from '@mui/material/Box';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomTextField from "../Form/TextField";
import MyCustomAutocomplete from './AutoComplete';


// --------------------------
// UTILS ---------------
// --------------------------
import { LOCATION } from '../../util/Constants';



const Location = ({ onLocationChange, helperText, error, valueEdit, value }) => {

    // VARIABLES ---------------
    const [locationData, setLocationData] = useState(null);

    useEffect(() => {
        if (valueEdit === "yes") {
            setLocationData(value);
        } else {
            setLocationData('');
        }
    }, [valueEdit, value]);


    // HANDLE CHANGE ---------------
    const handleLocationChange = (event, value) => {
        setLocationData(value);
        onLocationChange(value && value.label ? value.label : '');
    }

    const getLabel = (option) => (option && option.label) || '';



    return (
        <MyCustomAutocomplete
            id="country-select"
            options={LOCATION}
            autoFocus
            getOptionLabel={valueEdit === "yes" ? undefined : getLabel}
            onChange={handleLocationChange}
            value={locationData !== '' ? locationData : locationData}
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
                    sx={{ fontSize: '14px', height: '45px' }}
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
