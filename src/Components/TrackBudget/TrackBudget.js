import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

function TrackBudget({income,expense}) {
  return (
      <Box
        sx={{
          marginLeft:10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
            '& > :not(style)': {
              m: 4,
              width: 300,
              height: 100,
              alignItems:'center'}
          }}
      >
   

      <Paper >
        <Typography variant="h5">Income</Typography><Divider />
        <Typography variant="h4">&#8377;{income}</Typography>
      </Paper>
      <Paper  >
        <Typography variant="h5">Expense</Typography><Divider />
        <Typography variant="h4">&#8377;{expense}</Typography>
      </Paper>
      <Paper>
        <Typography variant="h5">Balance</Typography><Divider />
        <Typography variant="h4">&#8377;{income-expense}</Typography>
      </Paper>
    </Box>
  );
}
export default TrackBudget;