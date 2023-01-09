import React from "react";
import s from './Contacts.module.css'
import {Button} from "@material-ui/core";

type ContactsPropsType = {
    id: string
}
export const Contacts = (props: ContactsPropsType) => {
    return (
        <div className={s.container} id={props.id}>
           <div className={s.title}>Contacts</div>
            <div className={s.formBlock}>
                <form className={s.form}>
                    <input style={{width: '100%', height: '30px', marginBottom: '10px'}} placeholder={'Your name'}/>
                    <input style={{width: '100%', height: '30px', marginBottom: '10px'}} placeholder={'Your email'}/>
                    <textarea style={{width: '100%', height: '120px', marginBottom: '10px'}} placeholder={'Your questions'}/>
                </form>
                <span><Button style={{width: 'max-content', color: 'black', border: '1px solid black', margin: '20px', position: 'inherit'}}>Send</Button></span>
            </div>
        </div>
    )
}