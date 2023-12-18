import React from 'react'
import {Container,Typography,TextField,Button } from '@mui/material';


const login = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5%', backgroundColor:'#fff', borderRadius:"80px", width:'50vw', height:'50vh' }}>
      <Typography variant="h4" gutterBottom color="black">
        Login
      </Typography>
      <TextField label="Email" variant="outlined" margin="normal" sx={{ width: '300px' }} />
      <TextField label="Password" type="password" variant="outlined" margin="normal" sx={{ width: '300px' }} />
      <Button variant="contained" color="primary" sx={{ width: '300px', marginTop: 2 }}>
        Login
      </Button>
    </Container>
  )
}

export default login