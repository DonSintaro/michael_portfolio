
import React, { useState } from "react";
import NavBar from '../components/NavBar'

export default function Layout(props){

    return <>
        <NavBar/>

        <div className={"container ContentArea " + props.content}>

            
            {props.children}


        </div>

        




</>

        


    




}