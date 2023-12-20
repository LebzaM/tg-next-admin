"use client"
import React, {useState, useEffect} from 'react';
import { Table,Container, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel,Box, Button, TextField, TablePagination } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from 'next/link';
import AddNewUserButton from '@/app/(admin)/dashboard/user/_components/AddNewUserButton';

interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    telephone: string;
    status: string | null;
    manager: string | null;
    role: string| null;
    createdAt: Date;
    updatedAt: Date;
    departmentId: string | null;
  }
  
  interface EmployeeTableProps {
    employees: User[];
  }
const EmployeeTable: React.FC<EmployeeTableProps> =   ({ employees }) => {
  
    const [filterDepartment, setFilterDepartment] = useState<string | undefined>(undefined);
    
    const [filterStatus, setFilterStatus] = useState<string | undefined>(undefined);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const filteredEmployees = employees.filter(
      (employee) =>
        (!filterDepartment || employee.manager === filterDepartment) &&
        (!filterStatus || employee.status === filterStatus)
    );
  
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    
    
  
    return (
      <Box>
       <FormControl sx={{ marginBottom: 2, width:'100%' }}>
          <InputLabel htmlFor="filter-department">Filter Manager</InputLabel>
          <Select
            id="filter-department"
            value={filterDepartment || ''}
            onChange={(e) => setFilterDepartment(e.target.value as string)}
          >
            <MenuItem value="">All Managers</MenuItem>
            <MenuItem value="Michael Scott">Michael Scott</MenuItem>
            <MenuItem value="Sally Johnson">Sally Johnson</MenuItem>
            <MenuItem value="Kagiso Loney">Kagiso Loney</MenuItem>
            <MenuItem value="Dell Mane">Dell Mane</MenuItem>
          </Select>
        </FormControl>
  
        <FormControl sx={{ marginBottom: 2, width:'100%' }}>
          <InputLabel htmlFor="filter-status">Filter Status</InputLabel>
          <Select
            id="filter-status"
            value={filterStatus || ''}
            onChange={(e) => setFilterStatus(e.target.value as string)}
          >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4, margin: 'auto' }}>
      <TableContainer >
        <Container sx={{justifyContent: 'space-between', gap:'20px'}}>
      <AddNewUserButton />
      </Container>
      
        <Table>
          
          <TableHead>
            <TableRow>
              {/* <TableCell>ID</TableCell> */}
              <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Telephone Number</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Manager</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
               <TableRow key={employee.id}>
               <TableCell style={{ fontWeight: 'bold' }}>{employee.name}</TableCell>
               <TableCell>{employee.surname}</TableCell>
               <TableCell>{employee.telephone}</TableCell>
               <TableCell>{employee.email}</TableCell>
               <TableCell>{employee.manager}</TableCell>
               <TableCell>{employee.status}</TableCell>
               <TableCell>{employee.role}</TableCell>
               <TableCell style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                 <Button variant="outlined">
                   <Link href={`/dashboard/user/${employee.id}`}>Update</Link>
                 </Button>
                 <Button variant="contained" color="error">
                   Delete
                 </Button>
               </TableCell>
             </TableRow>
            ))}
          </TableBody>
          
        </Table>
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredEmployees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        
      </TableContainer>
      </Paper>
      </Box>
    );
  };
  
  export default EmployeeTable;