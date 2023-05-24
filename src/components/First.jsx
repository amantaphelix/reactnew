//"rafce" for snippet
import React from 'react'

import { TextField, Typography, Button } from '@mui/material';

const First = () => {
  return (
    <div><h1>Amanta</h1>
    <input type="text" placeholder='Name' />
    <br /><br />
    <input type="text" placeholder='password' />
    <br /><br />
    <button>Submit</button><br />
    <Typography variant='h1'>Amanta Phelix</Typography>
    <TextField variant='outlined' label='name'/><br /><br />
    <TextField variant='standard' label='name'/><br /><br />
    <TextField variant='filled' label='name'/><br /><br />
    <Button variant='contained'>Submit</Button>
    </div>

  );
}

export default First