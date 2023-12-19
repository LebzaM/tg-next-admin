import React from 'react'
import Link from 'next/link';
import { Button } from '@mui/material';
const AddNewUserButton = () => {
  return (
    <div>
      <Button
        type="submit"
        variant='contained'
      >
        <Link href="/dashboard/user/new">Add New User</Link>
      </Button>
    </div>
  )
}

export default AddNewUserButton