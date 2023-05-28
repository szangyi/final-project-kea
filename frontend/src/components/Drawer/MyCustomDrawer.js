
import "./MyCustomDrawer.css"

import { useNavigate, useLocation } from 'react-router-dom'

import { Box, Typography, Divider, Drawer } from "@mui/material"
import MyCustomList from '../List/List';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';


const drawerWidth = 200;

const MyCustomDrawer = (props) => {

    const nav = useNavigate();
    const location = useLocation();

    const itemsList = [
        {
            text: "My Account",
            icon: <PermIdentityOutlinedIcon />,
            action: () => nav('/user-dashboard/account-info'),
            href: '/account-info',
        },
        {
            text: "Security",
            icon: <SettingsOutlinedIcon />,
            action: () => nav('/user-dashboard/security'),
            // action: () => "/security",
            href: '/security',

        },
        {
            text: "Interests",
            icon: <VolunteerActivismOutlinedIcon />,
            action: () => nav('/user-dashboard/interests'),
            // action: () => "/interests",
            href: '/interests',
        }
    ];

    return (

        <Drawer
            className="drawer-section glassmorphism"
            variant="permanent"
            anchor="left"

            sx={{
                py: 3,
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { backgroundColor: 'transparent', width: drawerWidth, borderRight: 0, boxSizing: 'border-box', position: 'unset' },
            }}
        >

            {/* <Toolbar /> */}

            <Box sx={{ overflow: 'auto' }}>
                <MyCustomList sx={{ backgroundColor: 'transparent' }}>
                    {itemsList.map(item => {
                        const { text, icon, onClick, href } = item;
                        var isActive = location.pathname.includes(href);
                        var className = isActive ? 'active' : ''; // adding active class to the active menu element

                        return (
                            <ListItem
                                disableGutters
                                className={className}
                                key={item.text} >
                                <ListItemButton onClick={item.action}>
                                    {icon && <ListItemIcon sx={{ minWidth: '40px', minHeight: '', }} >{item.icon}</ListItemIcon>}
                                    <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '16px' }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </MyCustomList>

                {/* <Divider /> */}
            </Box>
        </Drawer>

    )
}


export default MyCustomDrawer;