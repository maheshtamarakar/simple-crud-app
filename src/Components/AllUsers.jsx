import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react'
import { getUsers } from '../Service/api'

const useStyle = makeStyles({
    table:{
        width:"90%",
        margin:"50px 50px"
    },
    thead:{
        "& > *":{
            background:"black",
            color:"white",
            fontSize:20,
        }
    },
    row:{
        "& > *":{
            fontSize:20,
        }
    },
})

export const AllUsers = () => {
    const classes = useStyle();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    },[])

    const getAllUsers = async() =>{
        const response = await getUsers();
        setUsers(response.data);
    }
    return (
        <Table className={classes.table}>
            <TableHead >
                <TableRow  className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.gmail}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
