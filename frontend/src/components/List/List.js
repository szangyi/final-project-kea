
import { List } from "@mui/material"
import { styled } from "@mui/material/styles"

const MyCustomList = styled(List)(({ theme }) => ({

    "& .MuiListItem-root": {
        color: theme.palette.primary.light,

        '&.active': {
            color: theme.palette.primary.main,
            fontWeight: 800,
        },

        '&:hover': {
            color: theme.palette.primary.main,
        },

        "& .MuiListItemIcon-root": {
            color: 'inherit',
        },

        "& .MuiListItemText-root": {
            color: 'inherit',
        },

        "& .MuiTouchRipple-root": {
            display: 'none', // disable ripple
        }
        

    },

}))

export default MyCustomList;