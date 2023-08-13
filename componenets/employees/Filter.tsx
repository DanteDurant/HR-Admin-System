import { Accordion, AccordionSummary, Box, Button, FormControl, MenuItem, Select, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import React from 'react'

const FilterMenu = () => {

  const [status, setStatus] = React.useState('');
  const statusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const [dep, setDep] = React.useState('');
  const depChange = (event: any) => {
    setDep(event.target.value);
  };

  const [manager, setManager] = React.useState('');
  const managerChange = (event: any) => {
    setManager(event.target.value);
  };

  return (

    <Accordion sx={{ border: '4px solid black' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant='h5' fontWeight={700}>Filter</Typography>
      </AccordionSummary>

      <Box ml={4} mr={15} display="flex" flexDirection="column">

        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" height="2rem" mr={1} >Status</Typography>
          <FormControl sx={{ width: "25rem", marginBottom: "1rem", }}>
            <Select
              sx={{ height: "2rem", borderRadius: "0", border: "4px solid black" }}
              value={status}
              onChange={statusChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>Active</em>
              </MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
              <MenuItem value="All">All</MenuItem>

            </Select>
          </FormControl>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" height="2rem" mr={1} >Department</Typography>
          <FormControl sx={{ width: "25rem", marginBottom: "1rem", }}>
            <Select
              sx={{ height: "2rem", borderRadius: "0", border: "4px solid black" }}
              value={dep}
              onChange={depChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>IT Department</em>
              </MenuItem>
              <MenuItem value="Accounting">Accounting</MenuItem>
              <MenuItem value="Human Resources">Human Resources</MenuItem>
              <MenuItem value="Packaging">Packaging</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" height="2rem" mr={1} >Manager</Typography>
          <FormControl sx={{ width: "25rem", marginBottom: "1rem", }}>
            <Select
              sx={{ height: "2rem", borderRadius: "0", border: "4px solid black" }}
              value={manager}
              onChange={managerChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>Andrej Karpathy</em>
              </MenuItem>
              <MenuItem value="Maarten Krüger">Maarten Krüger</MenuItem>
              <MenuItem value=" Ricardo Ohlssen"> Ricardo Ohlssen</MenuItem>
              <MenuItem value="Steve bazos">Steve Bazos</MenuItem>
              <MenuItem value="Mark Zuckerberg<">Mark Zuckerberg</MenuItem>
              <MenuItem value="John McCarthy">John McCarthy</MenuItem>
              <MenuItem value="Elon Musk">Elon Musk</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
        </Box>

      </Box >

      <Button
        sx={{
          border: '4px solid black',
          borderRadius: "0",
          color: "black",
          mb: 2,
          ml: 3,
          ":hover": {
            border: "4px solid black",
            bgcolor: "lightblue",
            color: "darkblue"
          }
        }}
        variant="outlined"

        startIcon={<FilterAltIcon />}
      >
        Filter
      </Button>

    </Accordion>

  )
}

export default FilterMenu