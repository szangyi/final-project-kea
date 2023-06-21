// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { TextField } from "@mui/material"
import { styled } from "@mui/material/styles"


const MyCustomTextField = styled(TextField)(({ variant, theme }) => ({
    paddingInline: 1,
    color: `0 0 0 2px ${theme.palette.secondary}`,
    paddingBlock: 0,
    fontSize: '14px',

    "& .MuiFormLabel-root": {
        fontSize: '14px',
        marginTop: '-4px'
    },

    "& .MuiInputBase-root": {
        borderRadius: "15px",
        fontSize: '14px',
        height: '45px'
    },

    "&.tags": {
        "& .MuiFormLabel-root": {
            marginTop: '8px'
        },
    }

}))

export default MyCustomTextField;