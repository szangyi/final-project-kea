// --------------------------
// REACT ---------------
// --------------------------
import { useNavigate } from 'react-router-dom'


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Box} from "@mui/material"
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomList from '../List/List';


// --------------------------
// STYLES ---------------
// --------------------------
import "./MyCustomDrawer.css"



const MyCustomMenuMobile = (props) => {

    const nav = useNavigate();

    const itemsList = [
        {
            text: "My Account",
            action: () => nav('/user-dashboard/account-info')
        },
        {
            text: "Security",
            action: () => nav('/user-dashboard/security')

        },
        {
            text: "Interests",
            action: () => nav('/user-dashboard/interests')
        }
    ];

    return (
        <Box sx={{ px: 2, pt: 2 }} className="mycustommenu-mobile-section">
        <MyCustomList sx={{backgroundColor: 'transparent', display: 'flex'}}>
            {itemsList.map(item => {
                const { text, icon, onClick } = item;
                return (
                    <ListItem disableGutters

                        key={item.text} >
                        <ListItemButton sx={{p: 0}}  onClick={item.action}>
                            {icon && <ListItemIcon sx={{ minWidth: '40px', minHeight: '', }} >{item.icon}</ListItemIcon>}
                            <ListItemText xs={{textAlign: 'center'}}  primary={item.text} primaryTypographyProps={{ fontSize: '16px' }}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </MyCustomList>

    </Box>
    );
}


export default MyCustomMenuMobile;