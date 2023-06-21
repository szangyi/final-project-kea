// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"


const MyCustomButton = styled(Button)(({ variant, theme }) => ({
    backgroundColor: theme.palette.customColors.purple.light,
    paddingInline: 30,
    borderRadius: "0",
    // width: "fit-content",
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
    ...(variant === "secondary" && {
        backgroundColor: theme.palette.background.default,
        "&:hover": {
            backgroundColor: theme.palette.customColors.grey.light,
        },
    }),

    ...(variant === "danger" && {
        backgroundColor: theme.palette.customColors.salmon.dark,
        "&:hover": {
            backgroundColor: theme.palette.customColors.salmon.main,
        },
    }),

    ...(variant === "tertiary" && {
        backgroundColor: theme.palette.customColors.grey.light,
        border: 'none',
        boxShadow: 'none',
        WebkitBoxShadow:'none',
        borderRadius: '20px',
        "&:hover": {
            backgroundColor: theme.palette.customColors.grey.main,
        },
    }),



}))

export default MyCustomButton;