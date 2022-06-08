import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../Service/api'

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

    const getAllUsers = async() =>{// taking all users data from api
        const response = await getUsers();
        setUsers(response.data);//set the data
    }
    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers();
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
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' color = 'primary' style={{marginRight:10}} component = {Link} to = {`/edit/${user.id}`}>Edit</Button>
                                <Button variant='contained' color = 'secondary' onClick={() => deleteUserData(user.id)}>Delete</Button>
                                </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
