import React from "react";
import s from './Navbar.module.css'
import {Button} from "@material-ui/core";


export const Navbar = () => {
    return (

        <div className={s.navbar}>
            <a href={'#main'}><Button style={{color: 'white'}} size={"small"}>Main</Button></a>
            <a href={'#skills'}><Button style={{color: 'white'}} size={"small"}>Skills</Button></a>
            <a href={'#projects'}><Button style={{color: 'white'}} size={"small"}>Projects</Button></a>
            <a href={'#contacts'}><Button style={{color: 'white'}} size={"small"}>Contacts</Button></a>
        </div>
    )
}