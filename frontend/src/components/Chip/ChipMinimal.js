
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


    // "&:hover": {
    //     backgroundColor: theme.palette.customColors.purple.main,
    //     boxShadow: "-5px 5px 0px 0px rgba(0, 0, 0, 0.9)",
    //     WebkitBoxShadow: "-5px 5px 0px 0px rgba(0, 0, 0, 0.9)",
    // },

    // "&:active": {
    //     transform: "translate(-3px, 3px)",
    //     boxShadow: "-1px 1px 0px 0px rgba(0, 0, 0, 0.9)",
    //     WebkitBoxShadow: "-1px 1px 0px 0px rgba(0, 0, 0, 0.9)",
    // },
    // ...(variant === "secondary" && {
    //     backgroundColor: theme.palette.background.default,
    //     "&:hover": {
    //         backgroundColor: theme.palette.customColors.grey.light,
    //     },
    // }),


}))

export default MyCustomChipMinimal;