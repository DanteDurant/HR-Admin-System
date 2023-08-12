import { Box, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


const MainHeading = () => {
  return (
    <Box border='4px solid black'>
      <Typography p={1} display="flex" variant='h4' fontWeight="500">
        <MenuIcon sx={{ height: "40px", width: "40px", mr: 1 }} /> HR Administration System
      </Typography>
    </Box >
  )
}

export default MainHeading