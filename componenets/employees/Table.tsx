import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SelectMenu from './SelectMenu';
import { Box, Typography } from '@mui/material';
import SearchBox from './SearchBox';
import { useState, useEffect } from 'react';

type User = {
  actions: string;
  name: string;
  surname: string;
  telephone: string;
  email: string;
  manager: string;
  status: string;
};

export default function DenseTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("api/retrieve", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Typography ml={2} variant='h6'>Loading...</Typography>;
  if (error) return <Typography ml={2} variant='h6'>Error: {error}</Typography>;

  // Ensure there are always 7 rows, filling up with empty data if needed
  while (users.length < 7) {
    users.push({
      actions: '',
      name: '',
      surname: '',
      telephone: '',
      email: '',
      manager: '',
      status: '',
    });
  }

  return (
    <Box ml={2}>
      <Box display={'flex'} justifyContent="space-between">
        <SelectMenu />
        <SearchBox />
      </Box>

      <TableContainer sx={{ border: "4px solid black", width: "50rem" }} component={Paper}>
        <Table
          sx={{
            '& td, & th': {
              borderRight: '4px solid black',
              height: "1.5rem"
            },
            '& td:last-child, & th:last-child': {
              borderRight: 'none',
            }
          }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#b2b2b2" }}>
              <TableCell>Actions</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Telephone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#e2e2e2' : 'white',
                }}
              >
                <TableCell>{user.actions}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.telephone}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.manager}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

