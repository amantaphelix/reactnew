import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Hey = () => {
    var[hname,sethname]=useState(" ");
    const Welcomeh =()=>{
        sethname("Home");
    }
    const Welcomeg =()=>{
        sethname("Gallery");
    }
    const Welcomec =()=>{
        sethname("Contacts");
    }
  return (
    <div>
        <br />
        <Button color='success' onClick={Welcomeh} variant='contained'>Home</Button><br /><br />
        <Button onClick={Welcomeg} variant='contained'>Gallery</Button><br /><br />
        <Button onClick={Welcomec} color='secondary' variant='contained'>Contact</Button><br /><br />
        <Typography variant='h2'>Welcome to {hname} </Typography>
    </div>
  );
}

export default Hey