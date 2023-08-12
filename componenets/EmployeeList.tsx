"use client"
import { Box, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import MyTable from './Table';



const EmployeeList = () => {
  return (
    <Box>
      <Box border='4px solid black'>
        <Typography p={1} display="flex" variant='h4' fontWeight="500">
          <MenuIcon sx={{ height: "40px", width: "40px", mr: 1 }} /> HR Administration System
        </Typography>
      </Box >

      <Box display="flex" >

        <Box height="30rem" width="15rem" mt={2} border='4px solid black' >Menu</Box>

        <Box>
          <Box pl={2} width="100%">
            <Typography py={1} display="flex" variant='h4' fontWeight="500">
              Employees
            </Typography>
            <Box height="15rem" width="50rem" mt={2} border='4px solid black' >
              <Typography sx={{ position: "absolute", mt: "-16px", ml: "10px", px: 1 }} bgcolor="#fff" variant='h5' fontWeight={700}>
                Filter
              </Typography>
            </Box>
          </Box>
          <MyTable />
        </Box>

      </Box>
    </Box >
  )
}

export default EmployeeList