
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import EmployeeTable from '@/app/ui/dashboard/EmployeeTable/EmployeeTable';
import EmployeeChart from '@/app/ui/dashboard/employeechart/employeechart';
import fetchUser from '@/app/lib/data';




const Employees = async () => {
  const users = await fetchUser();
  console.log(users)
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



export default Employees