// --------------------------
// REACT ---------------
// --------------------------
import { useNavigate } from 'react-router-dom'


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Box, Typography, Divider, Drawer } from "@mui/material"
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomList from '../List/List';


// --------------------------
// STYLES ---------------
// --------------------------
import "./MyCustomDrawer.css"





const drawerWidth = 200;

const MyCustomDrawer = (props) => {

    const nav = useNavigate();

    const itemsList = [
        {
            text: "My Account",
            icon: <PermIdentityOutlinedIcon />,
            action: () => nav('/user-dashboard/account-info')
        },
        {
            text: "Security",
            icon: <SettingsOutlinedIcon />,
            action: () => nav('/user-dashboard/security')
        },
        {
            text: "Interests",
            icon: <VolunteerActivismOutlinedIcon />,
            action: () => nav('/user-dashboard/interests')
        }
    ];

    return (

        <Drawer
            className="drawer-section"
            variant="permanent"
            anchor="left"

            sx={{
                py: 3,
                pl: 2,
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { backgroundColor: 'transparent', width: drawerWidth, borderRight: 0, boxSizing: 'border-box', position: 'unset' },
            }}
        >

            <Box sx={{ overflow: 'auto' }}>
                <MyCustomList sx={{backgroundColor: 'transparent'}}>
                    {itemsList.map(item => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem disableGutters

                                key={item.text} >
                                <ListItemButton onClick={item.action}>
                                    {icon && <ListItemIcon sx={{ minWidth: '40px', minHeight: '', }} >{item.icon}</ListItemIcon>}
                                    <ListItemText primary={item.text} primaryTypographyProps={{}}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </MyCustomList>
            </Box>
        </Drawer>

    )
}


export default MyCustomDrawer;