
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const MyCustomButton = styled(Button)(({ theme }) => ({

    // width: "fit-content",
    paddingInline: 30,
    borderRadius: "0",
    backgroundColor: theme.palette.customColors.purple.light,
    color: "black",
    fontWeight: "800",
    border: "2px solid black",
    boxShadow: "-5px 5px 0px 0px rgba(0, 0, 0, 0.9)",
    WebkitBoxShadow: "-5px 5px 0px 0px rgba(0, 0, 0, 0.9)",
    transition: ".1s ease-in",

    "&:hover": {
        backgroundColor: theme.palette.customColors.purple.main,
        boxShadow: "-5px 5px 0px 0px rgba(0, 0, 0, 0.9)",
        WebkitBoxShadow: "-5px 5px 0px 0px rgba(0, 0, 0, 0.9)",
    },

    "&:active": {
        transform: "translate(-3px, 3px)",
        boxShadow: "-1px 1px 0px 0px rgba(0, 0, 0, 0.9)",
        WebkitBoxShadow: "-1px 1px 0px 0px rgba(0, 0, 0, 0.9)",
    },
}))

export default MyCustomButton;