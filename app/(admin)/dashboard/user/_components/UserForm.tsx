'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Typography,
} from '@mui/material';

interface UserFormData {
  name: string;
  surname: string;
  email: string;
  password: string;
  telephone: string;
  manager?: string;
  status?: string;
  role?:string;
}

interface Props {
  user?: User;
}

const UserForm = ({ user }: Props) => {
  const { register, handleSubmit } = useForm<UserFormData>();
  const router = useRouter();
  const [error, setError] = useState('');

  return (
    <Paper elevation={3} sx={{ maxWidth: 'md', margin: 'auto', padding: 3 }}>
      {error && <Typography color="error">{error}</Typography>}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            if (user) await axios.patch(`/api/dashboard/user/${user.id}`, data);
            else await axios.post('/api/dashboard/user', data);
            router.push('/');
            router.refresh();
          } catch (error) {
            setError('Unexpected error occurs');
          }
        })}
      >
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          defaultValue={user?.name}
          {...register('name')}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Surname"
          variant="outlined"
          defaultValue={user?.surname}
          {...register('surname')}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          defaultValue={user?.email}
          {...register('email')}
          sx={{ mb: 2 }}
        />
        
        {!user && (
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            {...register('password')}
            sx={{ mb: 2 }}
          />
        )}
        <TextField
          fullWidth
          label="Telephone"
          variant="outlined"
          defaultValue={user?.telephone}
          {...register('telephone')}
          sx={{ mb: 2 }}
        />
        {user && (
          <>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Manager</InputLabel>
              <Select
                label="Manager"
                defaultValue={user.manager || ''}
                {...register('manager')}
              >
                <MenuItem value="Michael Scott">Michael Scott</MenuItem>
                <MenuItem value="Sally Johnson">Sally Johnson</MenuItem>
                <MenuItem value="Kagiso Loney">Kagiso Loney</MenuItem>
                <MenuItem value="Dell Mane">Dell Mane</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                defaultValue={user.status || ''}
                {...register('status')}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Role</InputLabel>
              <Select
                label="Role"
                defaultValue={user.role || ''}
                {...register('role')}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
              </Select>
            </FormControl>
          </>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default UserForm;