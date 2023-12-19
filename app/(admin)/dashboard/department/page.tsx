import React from 'react'
import { Container, Typography, Grid } from '@mui/material';
import prisma from '@/prisma/client';

import Link from 'next/link';
import DepartmentTable from '@/app/components/ui/DepartmentTable';
const DepartmentList = async () => {
    const departments = await prisma.department.findMany()
    return (
        <Container sx={{ marginTop: 4, flex:4  }}>
        <Typography  gutterBottom>
          Department View
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={20} md={12}>
            <DepartmentTable  managers={departments}/>
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

export default DepartmentList