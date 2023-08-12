import React from 'react';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';

const SelectMenu = () => {

  const [number, setNumber] = React.useState('');

  const handleChange = (event: any) => {
    setNumber(event.target.value);
  };

  return (
    <Box display="flex">

      <Typography variant="h6" height="2rem" mr={1} >Show per Page</Typography>
      <FormControl sx={{ width: "10rem", marginBottom: "1rem", }}>
        <Select
          sx={{ height: "2rem", borderRadius: "0", border: "4px solid black" }}
          value={number}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>10</em>
          </MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={"all"}>All</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectMenu