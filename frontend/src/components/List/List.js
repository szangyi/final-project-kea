
import { List } from "@mui/material"
import { styled } from "@mui/material/styles"

const MyCustomList = styled(List)(({ theme }) => ({

    "& .MuiListItem-root": {
        color: theme.palette.primary.light,

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