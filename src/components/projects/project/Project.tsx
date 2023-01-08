import React from 'react'
import s from './Project.module.css'

type ProjectPropsType = {
    img: string
    title: string
    prescription: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.projectCont}>
            <div className={s.imgCont}>{props.img}</div>
            <div className={s.title}>{props.title}</div>
            <div className={s.prescription}>{props.prescription}</div>
        </div>
    )
}