import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { addUsers } from '../Service/api'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

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
export const AddUsers = () => {
    const [user, setUser] = useState(initialValues);
    // const [name, setName] = useState("");
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    const {name, username, email, phone} = user;
    const classes = useStyle();
    const history = useHistory();

    const onChangeValue = (e) => {
        // console.log(e.target.value);
        setUser({ ...user,[e.target.name]: e.target.value });
        console.log(user);
        // setName((prev) => prev = e.target.name);
    }

    const addUsersDetails = async() => {
        await addUsers(user);
        history.push('./all'); 
    }
    return (
        <FormGroup className = {classes.container}>
            <Typography variant='h4'>Add User</Typography>
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
            <Button variant='contained' color = "primary" onClick={() => addUsersDetails()}>Add User</Button>
        </FormGroup>
    )
}
