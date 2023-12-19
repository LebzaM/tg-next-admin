"use client"
import React,{useState} from 'react'
import { Table,Container, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel,Box, Button, TextField, TablePagination } from '@mui/material';

import Link from 'next/link';
import AddButton from '@/app/(admin)/dashboard/department/_components/AddButton';

interface Manager {
    id: string;
    depname: string;
    managername: string;
    status: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  interface DepartmentTableProps {
    managers: Manager[];
  }
const DepartmentTable: React.FC<DepartmentTableProps> =({managers}) => {
    const [filterDepartment, setFilterDepartment] = useState<string | undefined>(undefined);
  
  const [filterStatus, setFilterStatus] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredEmployees = managers.filter(
    (manager) =>
      (!filterDepartment || manager.depname === filterDepartment) &&
      (!filterStatus || manager.status === filterStatus)
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
    <Paper elevation={3} sx={{ padding: 3, marginBottom: 4, width: '75%', margin: 'auto' }}>
      
     
        <TableContainer component={Paper}>
            <AddButton />
          <Table>
            {/* <h3>Department List</h3> */}
            <TableHead>
              <TableRow>
                <TableCell>Department</TableCell>
                <TableCell>Manager Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((manager) => (
                <TableRow key={manager.id}>
                  <TableCell style={{ fontWeight: 'bold' }}>
                    {manager.depname}
                  </TableCell>
                  <TableCell>{manager.managername}</TableCell>
                  <TableCell>{manager.status}</TableCell>
                  <TableCell style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <Button variant="outlined">
                      <Link href={`/dashboard/department/${manager.id}`}>
                        Update
                      </Link>
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
  )
}

export default DepartmentTable