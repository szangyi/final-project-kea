// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


// --------------------------
// UTILS ---------------
// --------------------------
import { SOCIALOPTIONS } from '../../util/Constants';



const SoMe = ({ className, onSoMeChange, customFilters }) => {

    // VARIABLES ---------------
    let initialSoMeData;

    if (customFilters) {
        initialSoMeData = customFilters
    } else {
        initialSoMeData = { some: '' }
    }

    const [soMeData, setSoMeData] = useState(initialSoMeData);


    // HANDLING CHANGE ---------------
    const handleSomeChange = (event) => {
        const valueData = event.target.value;
        setSoMeData(valueData);
        onSoMeChange(valueData);
    }


    return (
        <>
            <FormControl className={className} sx={{ width: '100%' }} >

                <Select
                    sx={{ borderRadius: '15px', height: '45px', fontSize: '14px' }}
                    labelId="some"
                    id="some"
                    value={soMeData !== '' ? soMeData : 'All SoMe'}
                    onChange={handleSomeChange}>

                    {SOCIALOPTIONS.map((option, index) => (
                        <MenuItem key={index} value={option.social} sx={{ fontSize: '14px' }}>
                            {option.social}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>


        </>
    );
}
export default SoMe;





