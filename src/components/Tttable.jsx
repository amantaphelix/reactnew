import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Tttable = () => {
    var [names,setnames]=useState([{
        name:"Tiya",
        age:20
    },{
        name:"Miya",
        age:21
    },{
        name:"Ann",
        age:30
    }])
  return (
    <div style={{paddingTop:"50px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"yellowgreen", fontSize:"30px"}}>Name</TableCell>
                        <TableCell style={{color:"greenyellow", fontSize:"30px"}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.age}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Tttable