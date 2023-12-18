
import React from 'react';
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
import { addUser } from '@/app/lib/actions';

  
  const AddUser = () => {
    
  
  return (
    <Paper elevation={3} sx={{ padding: 3, marginBottom: 4, width: '75%', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        User Information
      </Typography>
      <form action={addUser}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" fullWidth required name='name' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" fullWidth required  name='lastname'/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Telephone Number" fullWidth required  name='telephone'/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" type="email" fullWidth required name='email' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="password" type="password" fullWidth required name='password' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Manager" fullWidth name='manager'/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
              <InputLabel>Department</InputLabel>
              <Select label="Department" required name='department'>
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
              <Select label="Status" required name='status'>
                <MenuItem value={true}>Active</MenuItem>
                <MenuItem value={false}>Inactive</MenuItem>
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
  );
};

export default AddUser;