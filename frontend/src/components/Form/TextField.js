
import { TextField } from "@mui/material"
import { styled } from "@mui/material/styles"

const MyCustomTextField = styled(TextField)(({ theme }) => ({
    fontSize: 20,
    color: theme.palette.light.yellow,
    paddingInline: 1,
    paddingBlock: 1,

}))

export default MyCustomTextField;