
// import "./Drawer.css"

import { useNavigate } from 'react-router-dom'

import { Box, Typography, Divider, Drawer } from "@mui/material"

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const drawerWidth = 240;

const MyCustomDrawer = (props) => {

    const nav = useNavigate();

    const itemsList = [
        {
            text: "Account Info",
            icon: <InboxIcon />,
            action: () => nav('/user-dashboard/account-info')
        },
        {
            text: "Security",
            icon: <MailIcon />,
            action: () => nav('/user-dashboard/security')
            // action: () => "/security",
            // href: '/security',

        },
        {
            text: "Interests",
            icon: <MailIcon />,
            action: () => nav('/user-dashboard/interests')
            // action: () => "/interests",
            // href: '/interests',

        }
    ];

    return (

        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', position: 'unset' },
            }}
        >

            {/* <Toolbar /> */}

            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {itemsList.map(item => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem
                                key={item.text} >
                                <ListItemButton onClick={item.action}>
                                    {icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>

                {/* <Divider /> */}
            </Box>
        </Drawer>

    )
}


export default MyCustomDrawer;