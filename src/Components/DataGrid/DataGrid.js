import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableToolbar from "./TableToolbar";
import TableHeader from "./TableHeader";
import { stableSort,getComparator } from "./utils";
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const DataGrid =({transactions,onDeleteTransaction}) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('transactionId');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transactions.length) : 0;

  return (<>
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <TableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={transactions.length}
            />
                <TableBody>

          {stableSort(transactions, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
            return (
              <TableRow
                hover
                tabIndex={-1}
                key={row.transactionId}
                >
                
                <TableCell
                    component="th"
                    padding="none"
                    align="right"
                >
                    {row.transactionId}
                </TableCell>
                <TableCell
                    component="th"
                    align="left"
                >
                    {row.category}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="left">{row.dateTime}</TableCell>
                <TableCell align="left">{row.transactionType}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">
                  <Tooltip title="Delete">
                    <Button onClick={() => onDeleteTransaction(row.transactionId)}>
                      <DeleteIcon style={{color:'red'}}/>
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
            })}
            {emptyRows > 0 && (
            <TableRow
            style={{
                height:53 * emptyRows,
            }}
            >
            <TableCell colSpan={6} />
            </TableRow>
        )}
        </TableBody>
        </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
    </>
  );
}

export default DataGrid;