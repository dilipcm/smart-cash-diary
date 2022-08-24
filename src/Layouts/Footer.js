import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Footer = () => {
  return (
    <AppBar position="sticky"  sx={{mt:3}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
                  <Typography textAlign="center">Copyright &copy; {new Date().getFullYear()} Smart Cash Diary. All rights reserved.</Typography>
               
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Footer;
