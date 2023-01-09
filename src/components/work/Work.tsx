import React from "react";
import s from './Work.module.css'
import {Button} from "@material-ui/core";


export const Work = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>Work</div>
            <div className={s.workBlock}>
               <span className={s.titleWork}>Considering remote work options</span>
                <span><Button style={{width: 'max-content', color: 'black', border: '1px solid black', margin: '20px', position: 'inherit'}}>Hire me</Button></span>
            </div>
        </div>
    )
}