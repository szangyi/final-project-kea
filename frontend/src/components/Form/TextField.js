
import { TextField } from "@mui/material"
import { styled } from "@mui/material/styles"

const MyCustomTextField = styled(TextField)(({ theme }) => ({
    fontSize: 120,
    // color: theme.palette.customPurple.light,
    paddingInline: 1,
    color: `0 0 0 2px ${theme.palette.secondary}`,
    paddingBlock: 1,

}))

export default MyCustomTextField;