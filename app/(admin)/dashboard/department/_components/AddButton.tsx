import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
const AddButton = () => {
  return (
    <div>
      <Button
        type="submit"
        variant='contained'
      >
        <Link href="/dashboard/department/new">Add New Department</Link>
      </Button>
    </div>
  )
}

export default AddButton