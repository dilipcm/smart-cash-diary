import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const TableToolbar = ()=> {
    return (
      <><Paper>
        <Toolbar
            sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 }
            }}
        >
           <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Transaction History
            </Typography>
        </Toolbar>
      </Paper> 
      </>);
      
};

export default TableToolbar;
