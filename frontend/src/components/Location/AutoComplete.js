
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from "@mui/material/styles"



const MyCustomAutocomplete = styled(Autocomplete)(({ variant, theme }) => ({

    "& .MuiInputLabel-outlined": {
        fontSize: '14px',
    },

    "& .MuiInputLabel": {
        fontSize: '14px',
    },

    "& .MuiInputBase-input": {
        height: '15px'
    },


}))

export default MyCustomAutocomplete;