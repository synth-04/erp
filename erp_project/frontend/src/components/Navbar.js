// src/components/Navbar.js

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Customers', path: '/customers' },
    { text: 'Orders', path: '/orders' },
    { text: 'Inventory', path: '/inventory' },
    { text: 'Account', path: '/account' },
];

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawer = (
        <Box
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{ width: 250 }}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem 
                        button 
                        key={item.text}
                        component={Link}
                        to={item.path}
                    >
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1E3A5F' }}>
            <Toolbar>
                {/* Icona del menu per dispositivi mobili */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Drawer per dispositivi mobili */}
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {drawer}
                </Drawer>

                {/* Logo o titolo dell'app */}
                <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
                    Aros
                </Typography>

                {/* Pulsanti di navigazione per desktop */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                    {navItems.map((item) => (
                        <Button
                            key={item.text}
                            component={Link}
                            to={item.path}
                            color="inherit"
                            sx={{
                                color: '#FFFFFF',
                                position: 'relative',
                                '&:hover': {
                                    color: '#FFC857',
                                },
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: '#FFC857',
                                    bottom: 0,
                                    left: 0,
                                    transform: 'scaleX(0)',
                                    transition: 'transform 0.3s ease',
                                },
                                '&:hover:after': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                        >
                            {item.text}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
