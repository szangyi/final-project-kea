
// --------------------------
// REACT ---------------
// --------------------------
import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import { LogOutAPIAction as logoutAction } from '../../api/LogOutAPI'
import Logo from "../Logo/Logo";
import AccountInfoAPI from "../../api/AccountInfoAPI";


// --------------------------
// STYLES ---------------
// --------------------------
import "./Nav.css";





const pages = [
    {
        'name': 'Switch to Influence',
        'href': '/influencer-dashboard',
        'className': 'navlink-button',
    },
    {
        'name': 'Find your influencer',
        'href': '/collection',
    },

]

const settings = [
    {
        'name': 'Account',
        'href': '/user-dashboard',
    },
    {
        'name': 'My Collection',
        'href': '/user-collection',
    }
]

const settings2 = [
    {
        'name': 'Logout',
        'href': '#',
        'action': logoutAction
    },
]


function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null)

    AccountInfoAPI(setUserData, setError);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>

            <AppBar position="static" sx={{ paddingInline: { xs: 2, md: 5 }, boxShadow: 0, backgroundColor: 'transparent' }} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/* Desktop */}
                        <Box className="logo-container" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                            <Link to="/">
                                <Logo variant="black" />
                            </Link>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right', alignItems: 'center' }}>

                            {pages.map(page => (
                                <MenuItem disableRipple component="a" variant="navlink"
                                    key={page.name}
                                    href={page.href}
                                    className={page.className}
                                    sx={{ p: 0, marginInline: 2, my: 2, color: 'primary.main', fontWeight: 600, display: 'block', }}
                                >
                                    {page.name}
                                </MenuItem>
                            ))}

                        </Box>


                        {/* Mobile */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                {pages.map(page => (
                                    <MenuItem component="a"
                                        key={page.name}
                                        href={page.href}
                                    >
                                        {page.name}
                                    </MenuItem>
                                ))}

                            </Menu>
                        </Box>

                        {/* Put logo here */}
                        <Box sx={{ maxHeight: '20px', display: { xs: 'flex', md: 'none' }, justifyContent: 'center', flexGrow: 1 }}>
                            <Logo variant="white" />
                        </Box>
                        <Typography
                            sx={{
                                mr: 0,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                            }}
                        >
                        </Typography>


                        {/* All screen sizes */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip _title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 2 }}>
                                    {userData === null ? (
                                        // <Loader />
                                        <Avatar sx={{ border: '2px solid white' }}
                                        />
                                    ) : (

                                        <>
                                            {
                                                userData.userImage ? (
                                                    <Box
                                                        component="img"
                                                        src={`https://influncr.pythonanywhere.com/images/profile_images/${userData.userImage}`}
                                                        // src={`http://127.0.0.1:7878/profile_images/${userData.userImage}`}
                                                        sx={{ border: '2px solid white', height: 50, width: 50, objectFit: 'cover', borderRadius: '50%' }}
                                                    />
                                                ) : (
                                                    <Avatar sx={{ border: '2px solid white' }} alt={userData.firstName} src="/fallback"
                                                    />
                                                )
                                            }
                                        </>
                                    )}

                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                {settings.map(setting => (
                                    <MenuItem component="a"
                                        key={setting.name}
                                        href={setting.href}
                                    >
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                ))}

                                <Divider />

                                {settings2.map(setting => (
                                    <MenuItem component="a"
                                        key={setting.name}
                                        href={setting.href}
                                        onClick={() => setting.action()}
                                    >
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default ResponsiveAppBar;