"use client"
import {usePathname} from 'next/navigation';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
const Navbar = () => {

    const pathname = usePathname()
  return (
    <AppBar position='sticky' sx={{borderRadius:80, marginBottom: 4, marginTop: 4, width: '80%', marginLeft: 'auto', marginRight:'auto'}}>
    <Toolbar sx={{ justifyContent:'center'}}>
    <HomeIcon />/
      <Typography  component="div" sx={{ flexGrow: 1 }}>
       
        {pathname.split("/").pop()}
      </Typography>
      {/* <Button color="inherit">Home</Button>
      <Button color="inherit">About</Button>
      <Button color="inherit">Contact</Button> */}
    </Toolbar>
  </AppBar>
  )
}

export default Navbar