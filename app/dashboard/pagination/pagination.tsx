"use client"
import React from 'react'
import { Table,Container, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel,Box, Button, TextField } from '@mui/material';
const Pagination = () => {
  return (
    <Container>
        <Button sx={{padding:"8px", backgroundColor:"aqua", color:'black'}}>Previous </Button>
        <Button sx={{padding:"8px", backgroundColor:"aqua", color:'black'}}>Next </Button>
    </Container>
  )
}

export default Pagination