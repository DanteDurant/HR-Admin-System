import { Box, Button, Link, Stack } from '@mui/material'

const MenuNav = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-around"
      height="30rem"
      minWidth="15rem"
      mt={2}
      px={4}
      py={15}
      border='4px solid black'
    >

      <Button fullWidth sx={{ border: "4px solid black" }}>
        <Link sx={{ textDecoration: "none" }} href='/employees'>
          Employees
        </Link>
      </Button>

      <Button fullWidth sx={{ border: "4px solid black" }}>
        <Link sx={{ textDecoration: "none" }} href='/register'>
          Create
        </Link>
      </Button>

      <Button fullWidth sx={{ border: "4px solid black" }}>
        <Link sx={{ textDecoration: "none" }} href='/'>
          Sign Out
        </Link>
      </Button>

    </Stack>
  )
}

export default MenuNav