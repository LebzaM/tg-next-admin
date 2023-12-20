
import React from "react";
import { Container, Typography, Grid } from '@mui/material';
import prisma from '@/prisma/client';
import EmployeeTable from "@/app/components/ui/EmployeeTable";


const UserList = async () => {
    const users = await prisma.user.findMany();
  
    return (
      <Container sx={{ marginTop: 10, flex: 4 }}>
      <Typography gutterBottom>Employee View</Typography>
        <Grid item xs={20} md={12}>
          <EmployeeTable employees={users} />
        </Grid>
      </Container>
      )
}
export default UserList;
