// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Chip } from "@mui/material"
import { styled } from "@mui/material/styles"


const MyCustomChipMinimal = styled(Chip)(({ variant, theme }) => ({
    border: "none",
    backgroundColor: 'transparent',
    transition: ".1s ease-in",
    borderRadius: '0',
    padding: '0 !important',
    marginRight: 10,

    "& .MuiChip-label": {
        padding: '0'
    },

    "&:hover": {
        backgroundColor: 'transparent !important',
        
        "& .MuiChip-label": {
            fontWeight: 800,
        }
    },


    "&:active": {
        backgroundColor: 'transparent !important',
        border: 'none',
        boxShadow: 'none',
        
        "& .MuiChip-label": {
            fontWeight: 800,
        }
    },


    "&.selected": {
        "& .MuiChip-label": {
           marginBottom: '-2px',
        },

        fontWeight: 800,
        borderBottom: '2px solid black'
    },

}))

export default MyCustomChipMinimal;