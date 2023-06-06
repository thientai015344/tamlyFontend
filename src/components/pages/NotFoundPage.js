import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'
export default function NotFoundPage(){
    
    
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        console.log(2 == "2")
        return (
            <div>
                <Navbar></Navbar>

               <img style={{width:"100%"}}  src={PF+"post/404.png"}></img>
            </div>
        )
    
}
