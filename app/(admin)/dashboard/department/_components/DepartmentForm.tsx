'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Department } from '@prisma/client';
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

interface DepartmentFormData {
  depname: string;
  managername: string;
  status?: string;
}

interface Props {
  department?: Department;
}

const DepartmentForm = ({ department }: Props) => {
  const { register, handleSubmit, control } = useForm<DepartmentFormData>();
  const router = useRouter();
  const [error, setError] = useState('');

  return (
    <Paper elevation={3} sx={{ maxWidth: 'md', margin: 'auto', padding: 3 }}>
      {error && <Typography color="error">{error}</Typography>}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            if (department)
              await axios.patch(
                `/api/dashboard/department/${department.id}`,
                data
              );
            else await axios.post('/api/dashboard/department', data);
            router.push('/');
            router.refresh();
          } catch (error) {
            setError('Unexpected error occurs');
          }
        })}
      >
        <TextField
          fullWidth
          label="Department Name"
          variant="outlined"
          placeholder="Enter Department Name"
          defaultValue={department?.depname}
          {...register('depname')}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Manager Name"
          variant="outlined"
          placeholder="Enter Manager Name"
          defaultValue={department?.managername}
          {...register('managername')}
          sx={{ mb: 2 }}
        />

        {department && (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              defaultValue={department.status}
              {...register('status')}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
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

export default DepartmentForm;