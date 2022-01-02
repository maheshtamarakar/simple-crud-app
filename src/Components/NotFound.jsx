import { makeStyles } from '@material-ui/styles'
import React from 'react'
import notFound from '../Assets/Images/404page.jpg'

const useStyle = makeStyles({
    main:{
        color:"gray",
    }
})

export const NotFound = () => {
    const classes = useStyle();
    return (
        <div>
            <img style={{width:'100%', objectFit:'cover'}} src={notFound} alt="" />
        </div>
    )
}
