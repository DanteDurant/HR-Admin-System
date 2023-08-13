"use client"
import { Box, Typography } from '@mui/material'
import MyTable from './employees/Table';
import FilterMenu from './employees/Filter';
import MainHeading from './Heading';
import MenuNav from './MenuNav';
import VisualTest from './VisualTest';



const Employees = () => {
  return (
    <Box>

      <MainHeading />


      <Box display="flex" >

        <MenuNav />

        <Box>
          <Box pl={2} pt={1} mb={4} width="100%">
            <Typography py={1} display="flex" variant='h4' fontWeight="500">
              Employees
            </Typography>
            <FilterMenu />
          </Box>
          <MyTable />
        </Box>

      </Box>
    </Box >
  )
}

export default Employees