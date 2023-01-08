import React from 'react'
import s from './Skill.module.css'


type SkillPropsType = {
    logo: string
    mainSkill: string
    skillProp: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.logo}><img src={props.logo} alt={''}/> </div>
            <div className={s.skillMain}>{props.mainSkill}</div>
            <div className={s.skillProp}>{props.skillProp}</div>
        </div>
    )
}
