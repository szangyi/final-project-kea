import "./Nav.css";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from "../Logo/Logo";

export function alex() {
    alert('kitty cat logs in')
}

const pages = [
    {
        'name': 'Log in',
        'href': '#',
        'action': alex,
    }
]

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{ paddingInline: {xs: 2, md: 5}, boxShadow: 0, backgroundColor: 'transparent' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* Desktop */}
                    {/* Put logo here */}
                    <Box className="logo-container" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <Logo variant="black" />
                    </Box>

                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right', alignItems: 'center' }}>

                        {pages.map(page => (
                            <MenuItem disableRipple component="a" variant="navlink"
                                key={page.name}
                                href={page.href}
                                onClick={() => page.action()}
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
                            color="primary"
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
                                    onClick={() => page.action()}
                                >
                                    {page.name}
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>

                    {/* Put logo here */}
                    <Box className="logo-container" sx={{ display: { xs: 'block', md: 'none' }, mr: 2, flexGrow: 1 }}>
                        <Logo variant="black" />
                    </Box>

                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2, flexGrow: 1 }} /> */}
                    <Typography
                        sx={{
                            mr: 0,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                        }}
                    >
                    </Typography>


                    {/* All screen sizes */}


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;