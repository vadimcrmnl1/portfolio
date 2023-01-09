import React from 'react'
import s from './Project.module.css'


type ProjectPropsType = {
    img: string
    title: string
    prescription: string
    alt: string
    url: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.projectCont}>
            <div className={s.imgCont}>
                <a className={s.url} title={'Go to GitHub'} href={props.url} target={'_blank'}><img src={props.img} alt={props.alt}/></a>

            </div>
            <div className={s.title}>{props.title}</div>
            <div className={s.prescription}>{props.prescription}</div>
        </div>
    )
}