import React from 'react';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

function MyTable() {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
            <TableCell>Column 4</TableCell>
            <TableCell>Column 5</TableCell>
            <TableCell>Column 6</TableCell>
            <TableCell>Column 7</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array(8).fill().map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array(7).fill().map((_, colIndex) => (
                <TableCell key={colIndex}>Row {rowIndex + 1} Cell {colIndex + 1}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default MyTable;
