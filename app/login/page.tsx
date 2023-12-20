'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import {Container,Typography,TextField,Button,Paper, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
const LoginPage = () => {
   const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (!result?.error) {
      // Redirect 
      router.push('/');
      console.log('Login successful');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <Paper elevation={3} sx={{ width:'50%', height:"50%", margin: 'auto', padding: 2, display: 'flex', flexDirection: 'column', justifyContent:'center', marginTop:'10%' }}>
      <Box sx={{display:'flex', flexDirection:'column'}}>
      <Typography variant="h4" gutterBottom color="black">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{ width: '300px', marginBottom: 2 }}
        />
        <TextField
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          sx={{ width: '300px', marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ width: '300px' }}>
          Login
        </Button>
      </form>
      </Box>
    </Paper>
  );
};

export default LoginPage;