
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const MyCustomButton = styled(Button)(({ theme }) => ({
    paddingInline: 140,
    borderRadius: 20,
    // background: "#59C6B8",
    backgroundColor: theme.palette.dark.black,
}))

export default MyCustomButton;