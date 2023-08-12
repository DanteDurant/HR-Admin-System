import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SelectMenu from './SelectMenu';
import { Box } from '@mui/material';
import SearchBox from './SearchBox';

function createData(
  actions: string,
  name: string,
  lastname: string,
  telephone: string,
  email: string,
  manager: string,
  status: string,
) {
  return { actions, name, lastname, telephone, email, manager, status };
}

const rows = [
  createData('Edit Deactivate', 'TestName', 'TestLastname', '0816578284', 'test@gmail.com', "John Doe", 'Active'),
  createData('Edit Deactivate', 'TestName', 'TestLastname', '0816578284', 'test@gmail.com', "John Doe", 'Active'),
  createData('Edit Deactivate', 'TestName', 'TestLastname', '0816578284', 'test@gmail.com', "John Doe", 'Active'),
  createData('Edit Deactivate', 'TestName', 'TestLastname', '0816578284', 'test@gmail.com', "John Doe", 'Active'),
  createData('Edit Deactivate', 'TestName', 'TestLastname', '0816578284', 'test@gmail.com', "John Doe", 'Active'),
  createData('Edit Deactivate', 'TestName', 'TestLastname', '0816578284', 'test@gmail.com', "John Doe", 'Active'),
  createData('Edit Deactivate', 'TestName', 'TestLastname', '0816578284', 'test@gmail.com', "John Doe", 'Active'),

];

export default function DenseTable() {

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
              <TableCell>Telephone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#e2e2e2' : 'white',
                }}
              >
                <TableCell>{row.actions}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.lastname}</TableCell>
                <TableCell>{row.telephone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.manager}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>



    </Box>
  );
}



