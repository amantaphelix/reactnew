import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'black'} sx={{ flexGrow: 1 }} align='left'>MyNew</Typography>
                <Button variant='text' color='secondary' ><Link to={'/'}>Home</Link></Button>
                <Button variant='text'><Link to={'/First'}>First</Link></Button>
                <Button variant='text'><Link to={'/axios'}>axios</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default Navbar