'use client'
import React from 'react';
import { AppBar, Toolbar, Typography, Link as MuiLink, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import Link from 'next/link';
const Navbar = () => {
  const links = [
    { id: 1, label: 'Home', href: '/', icon: <HomeIcon /> },
    { id: 2, label: 'Department', href: '/dashboard/department', icon: <BusinessIcon /> },
    { id: 3, label: 'Users', href: '/dashboard/user', icon: <PeopleIcon /> },
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          <Link href="/" passHref>
            Genius HR Admin
          </Link>
        </Typography>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            {links.map((link) => (
              <Link key={link.id} href={link.href} passHref>
                <ListItem  onClick={toggleDrawer}>
                  {link.icon && <IconButton color="inherit">{link.icon}</IconButton>}
                  <ListItemText primary={link.label} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Drawer>
        {/* <div style={{ marginLeft: 'auto' }}>
          {links.map((link) => (
            <Link key={link.id} href={link.href} passHref>
              <Button color="inherit" startIcon={link.icon}>
                {link.label}
              </Button>
            </Link>
          ))}
        </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;