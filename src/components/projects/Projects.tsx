import React from "react";
import s from './Projects.module.css'
import {Project} from "./project/Project";


type ProjectsPropsType = {
    id: string
}

export const Projects = (props: ProjectsPropsType) => {
    return (
        <div className={s.container} id={props.id}>
            <Project img={'sn'} title={'Social network'} prescription={'Your favorite social network'}/>
            <Project img={'tl'} title={'Todolist'} prescription={'Do not forgot your tasks'}/>
            <Project img={'counter'} title={'Counter'} prescription={'Only click and relax'}/>

        </div>
    )
}