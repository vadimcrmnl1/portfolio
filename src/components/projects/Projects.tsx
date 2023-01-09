import React from "react";
import s from './Projects.module.css'
import {Project} from "./project/Project";
import sn from './common/sn.png'
import tl from './common/tl.png'
import counter from './common/counter.png'


type ProjectsPropsType = {
    id: string
}

export const Projects = (props: ProjectsPropsType) => {
    return (
        <div className={s.container} id={props.id}>
            <div className={s.title}>Projects</div>
            <div className={s.projectsBlock}>
                <Project img={sn}
                         alt={'Social Network'}
                         title={'Social network'}
                         prescription={'Your favorite social network'}
                url={'https://github.com/vadimcrmnl1/samurai-way-main'}/>
                <Project img={tl}
                         alt={'Todolist'}
                         title={'Todolist'}
                         prescription={'Do not forget your tasks'}
                url={'https://github.com/vadimcrmnl1/Todolist'}/>
                <Project img={counter}
                         alt={'Counter'}
                         title={'Counter'}
                         prescription={'Just click and relax'}
                url={'https://github.com/vadimcrmnl1/Counter'}/>
            </div>


        </div>
    )
}