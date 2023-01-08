import React from "react";
import s from './Navbar.module.css'
import {Button} from "@material-ui/core";




export const Navbar = () => {
    return (

        <div className={s.navbar}>
            <a href={'#main'}><Button style={{color: 'white'}} size={"large"}>Main</Button></a>
            <a href={'#skills'}><Button style={{color: 'white'}} size={"large"}>Skills</Button></a>
            <a href={'#projects'}><Button style={{color: 'white'}} size={"large"}>Projects</Button></a>
           <Button style={{color: 'white'}} size={"large"}>About</Button>
           <Button style={{color: 'white'}} size={"large"}>Contacts</Button>
        </div>
    )
}