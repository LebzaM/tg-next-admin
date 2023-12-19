
import React from "react";
import AddNewUserButton from "./_components/AddNewUserButton";
import { Container, Typography, Grid } from '@mui/material';
import prisma from '@/prisma/client';
import EmployeeTable from "@/app/components/ui/EmployeeTable";

const UserList = async () => {
    const users = await prisma.user.findMany();
    return (
        <Container sx={{ marginTop: 4, flex:4  }}>
        <Typography  gutterBottom>
          Employee View
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={20} md={12}>
            <EmployeeTable employees={users}/>
          </Grid>
          {/* <Grid item xs={20} md={12}>
            <EmployeeChart />
          </Grid> */}
          {/* {users.map((user)=>(
              <div key={user.id}>
                <h1>{user.name}</h1>
              </div>
          ))} */}
          
        </Grid>
    
        
      </Container>
      
      )
}
export default UserList;
