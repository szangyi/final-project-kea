
import "./MyCustomDrawer.css"

import { useNavigate } from 'react-router-dom'

import { Box, Typography, Divider, Drawer } from "@mui/material"
import MyCustomList from '../List/List';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Menu from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const MyCustomMenuMobile = (props) => {

    const nav = useNavigate();

    const itemsList = [
        {
            text: "My Account",
            // icon: <PermIdentityOutlinedIcon />,
            action: () => nav('/user-dashboard/account-info')
        },
        {
            text: "Security",
            // icon: <SettingsOutlinedIcon />,
            action: () => nav('/user-dashboard/security')

        },
        {
            text: "Interests",
            // icon: <VolunteerActivismOutlinedIcon />,
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

        {/* <Divider /> */}
    </Box>
    );
}


export default MyCustomMenuMobile;