import React from 'react'
import fetchUser from '@/app/lib/data';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

interface Params {
  id: string;
}

interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  telephone: string;
  manager: string;
  department: string;
  status: 'active' | 'inactive';
  
}

const SingleEmployee = async  () => {
  

  return (
    <Paper elevation={3} sx={{ padding: 3, marginBottom: 4, width: '75%', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Hey
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" fullWidth  />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" fullWidth  />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Telephone Number" fullWidth  />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" type="email" fullWidth  />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Password" type="password" fullWidth  />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Manager" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
              <InputLabel>Department</InputLabel>
              <Select label="Department" required>
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="PR">PR</MenuItem>
                <MenuItem value="PR">Finance</MenuItem>
                <MenuItem value="PR">Sales</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label="Status" required>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default SingleEmployee