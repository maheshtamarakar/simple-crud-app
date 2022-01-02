import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
    header:{
        background:"black",
    },
    tab:{
        color:"white",
        textDecoration:"none",
        marginRight:20,
        fontSize:20,

    }

})
export const Navbar = () => {
    const classes = useStyle();
    return (
        <AppBar className = {classes.header} position='static'>
            <Toolbar>
                <NavLink className = {classes.tab} exact to ="./">Mahesh</NavLink>
                <NavLink className = {classes.tab} exact to ="all">All Users</NavLink>
                <NavLink className = {classes.tab} exact to ="add">Add Users</NavLink>
            </Toolbar>
        </AppBar>
    )
}
