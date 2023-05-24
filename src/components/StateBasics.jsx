import { Typography, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname, setPname]=useState(" ")
    var[val,setval]=useState()
    const inputHandler = (p)=>{
        setval(p.target.value);
        console.log(val)
    }
    const Changename = ()=>{
        setPname(val);
        setval("");
    }
  return (
    <div>
        <br />
        <Typography variant='h4'>Hey {pname}</Typography>
        <TextField variant='outlined' value={val} label="name" onChange={inputHandler}/>
        <br />
        <Button variant='contained' onClick={Changename}>Change</Button>
    </div>
  );
}

export default StateBasics