import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, styled } from '@mui/material';
import { alpha } from '@material-ui/core';

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(searchTerm);  // You can replace this with your search logic
  };

  const Search = styled('div')(({ }) => ({
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    height: '2rem'
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(0.2, 0, 0, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',

      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  return (
    <form onSubmit={handleSubmit}>
      <Search sx={{ border: "4px solid black" }} >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </form>
  );
}

export default SearchBox;
