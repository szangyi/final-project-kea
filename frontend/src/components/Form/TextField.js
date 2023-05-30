
import { TextField } from "@mui/material"
import { styled } from "@mui/material/styles"

const MyCustomTextField = styled(TextField)(({ variant, theme }) => ({
    // fontSize: 120,
    paddingInline: 1,
    color: `0 0 0 2px ${theme.palette.secondary}`,
    paddingBlock: 1,
    "& .MuiInputBase-root": {
        borderRadius: "15px",
    },
}))

export default MyCustomTextField;