import React from "react";
import s from './Skills.module.css'
import html from './common/html.png'
import css from './common/css.png'
import js from './common/js.png'
import ts from './common/Typescript_logo_2020.svg.png'
import react from './common/react.png'
import redux from './common/redux.png'
import nodejs from './common/nodejs.png'
import {Skill} from "./skill/Skill";

type SkillsPropsType = {
    id: string
}

export const Skills = (props: SkillsPropsType) => {
    return (

        <div className={s.container} id={props.id}>
            <div className={s.title}>Skills</div>
            <div className={s.skillsBlock}>
                <Skill logo={html} mainSkill={'HTML'}
                       skillProp={'Can write simple and complex websites in HTML'}/>
                <Skill logo={css} mainSkill={'CSS'}
                       skillProp={'Impeccably using Cascading Style Sheets to make your website or app look great'}/>
                <Skill logo={js} mainSkill={'JavaScript'}
                       skillProp={'I solve problems in JavaScript, write applications and websites'}/>
                <Skill logo={ts} mainSkill={'TypeScript'}
                       skillProp={'I can distinguish a string from a number, type a state and an entire application'}/>
                <Skill logo={react} mainSkill={'React'}
                       skillProp={'Using the React library, I make single-page applications for any task'}/>
                <Skill logo={redux} mainSkill={'Redux'}
                       skillProp={'Using the React library, I make single-page applications for any task'}/>
                <Skill logo={nodejs} mainSkill={'Node JS'}
                       skillProp={'Using the React library, I make single-page applications for any task'}/>
            </div>


        </div>


    )
}