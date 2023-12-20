import React from 'react'
import { Container, Typography, Grid } from '@mui/material';
import prisma from '@/prisma/client';
import DepartmentTable from '@/app/components/ui/DepartmentTable';
const DepartmentList = async () => {
    const departments = await prisma.department.findMany()
    return (
      <Container sx={{ marginTop: 10, flex: 4 }}>
      <Typography gutterBottom>Departments</Typography>
        <Grid item xs={20} md={12}>
        <DepartmentTable  managers={departments}/>
        </Grid>
      </Container>
      
      )
}

export default DepartmentList