import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { editUsers, getUsers } from '../Service/api'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
const useStyle = makeStyles({
    container:{
        width:"50%",
        margin:"5% auto",
        "& > *":{
            marginTop:20,
        }

    },

})



const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',
}
export const EditUsers = () => {
    const [user, setUser] = useState(initialValues);
    const {name, username, email, phone} = user;
    const {id} = useParams();
    const classes = useStyle();
    const history = useHistory();

    const onChangeValue = (e) => {
        setUser({ ...user,[e.target.name]: e.target.value });
        console.log(user);
    }

    const editUserDetails = async() => {
        await editUsers(id, user);
        history.push('../all');
    }
    useEffect(() => {
        loadUserData();
    }, []);
    const loadUserData = async() =>{
       const response = await getUsers(id);
       setUser(response.data)
    }
    return (
        <FormGroup className = {classes.container}>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input name='name' onChange={(e) => onChangeValue(e)} value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input name='username' onChange={(e) => onChangeValue(e)} value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input name='email' onChange={(e) => onChangeValue(e)} value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input name='phone' onChange={(e) => onChangeValue(e)} value={phone}/>
            </FormControl>
            <Button variant='contained' color = "primary" onClick={() => editUserDetails()}>Edit User</Button>
        </FormGroup>
    )
}
