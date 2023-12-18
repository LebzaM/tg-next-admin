"use client"
import React, {useState, useEffect} from 'react';
import { Table,Container, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel,Box, Button, TextField, TablePagination } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from 'next/link';
import Pagination from '@/app/dashboard/pagination/pagination';
import  fetchUser  from '@/app/lib/data';
interface Employee {
  id: string;
  name: string;
  lastname: string;
  email: string;
  telephone: string;
  manager: string;
  department: string;
  status: 'active' | 'inactive';
}

interface EmployeeTableProps {
  employees: Employee[];
}
const EmployeeTable: React.FC<EmployeeTableProps> =   ({ employees }) => {
  
  const [filterDepartment, setFilterDepartment] = useState<string | undefined>(undefined);
  
  const [filterStatus, setFilterStatus] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredEmployees = employees.filter(
    (employee) =>
      (!filterDepartment || employee.department === filterDepartment) &&
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
     <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="filter-department">Filter Department</InputLabel>
        <Select
          id="filter-department"
          value={filterDepartment || ''}
          onChange={(e) => setFilterDepartment(e.target.value as string)}
        >
          <MenuItem value="">All Departments</MenuItem>
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
          {/* Add more departments as needed */}
        </Select>
      </FormControl>

      <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="filter-status">Filter Status</InputLabel>
        <Select
          id="filter-status"
          value={filterStatus || ''}
          onChange={(e) => setFilterStatus(e.target.value as string)}
        >
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </Select>
      </FormControl>
    
    <TableContainer component={Paper}>
      <Container sx={{justifyContent: 'space-between', gap:'20px'}}>
    <Link href="/dashboard/users/add">
    <Button sx={{padding:"8px", backgroundColor:"aqua", color:'black'}}>Add New </Button>
    </Link>
    <TextField
      id="search-bar"
      className="text"
      
      label="Search an Employee"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>

    </Container>
      <Table>
        
        <TableHead>
          <TableRow>
            {/* <TableCell>ID</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            
            <TableCell>Telephone Number</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Manager</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
            <TableRow key={employee.id}>
              {/* <TableCell>{employee.id}</TableCell> */}
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.lastname}</TableCell>
              <TableCell>{employee.telephone}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.manager}</TableCell>
              {/* <TableCell>{employee.position}</TableCell> */}
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.status? "active":'inactive'}</TableCell>
              
              <TableCell><Link href={`/dashboard/users/${employee.id}`}><Button sx={{bgColor:'green'}}>View</Button></Link></TableCell>
              
              <TableCell><Button  sx={{bgColor:'red'}}>Delete</Button></TableCell>
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
    </Box>
  );
};

export default EmployeeTable;