import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Hero from '../public/Admin.png'
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        background: '#f4f4f4',
        borderRadius:"80px"
        
      }}
    >
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Genius HR Admin
        </Typography>
        <Typography variant="body1" paragraph>
          Streamline your HR processes with our comprehensive administration tools.
          Manage employees, track performance, and more, all in one place.
        </Typography>
        <Link href='/login'>
        <Button variant="contained" color="primary" size="large">
          Login
        </Button>
        </Link>
        
        <Image
          src={Hero}
          alt="Hero"
          
          style={{maxWidth: '100%',
          height: 'auto',
          marginTop: 3,
          justifyContent:'center',
          alignItems:'center'}}
          
          
        />
      </Box>
    </Container>
  );
};

export default HomePage;