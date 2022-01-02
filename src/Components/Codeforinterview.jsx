import React from 'react'
import home from '../Assets/Images/home2.jpg'

export const Codeforinterview = () => {
    return (
        <div>
            <h4 style={{textAlign:"center", fontSize:20, color:"red"}}>Home Page</h4>
            <img style={{width:'100%', objectFit:'cover', position:'absolute',top:0, zIndex:-1, height:'100vh'}} src={home} alt="" />
        </div>
    )
}
