'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Users from '@/app/dashboard/users/page';
import Link from 'next/link';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';


const drawerWidth = 240;

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = React.useState('');
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      {/* <Toolbar >
        <Typography variant="h6" noWrap component="div" >
          Permanent drawer
        </Typography>
      </Toolbar> */}
    </AppBar>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
        <Toolbar>
        <div>User Profile</div>
      </Toolbar> 
      
      <Divider />
      <List>
        
      {[
            { text: 'Dashboard', link: '/dashboard/users', content: <Users />},
           { text: 'Users', link: '/dashboard/employees', content: <Users />},
           
           
          ].map(({ text, link }, index) => (
            <Link href={link} passHref key={text}>
              
                <ListItem  onClick={() => {
                      setSelectedItem(text);
                      
                    }}>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon /> } */}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              
            </Link>
          ))}
      </List>
      <Divider />
  
    </Drawer>
    </Box>
  )
}

export default Sidebar