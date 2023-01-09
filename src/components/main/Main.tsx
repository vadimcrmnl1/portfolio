import React from "react";
import s from './Main.module.css'
import ava from './ava.jpg'

type MainPropsType = {
    id: string
}

export const Main = (props: MainPropsType) => {
    return (
        <div className={s.mainBlock} id={props.id}>
            <div className={s.container}>
                <div className={s.nameBlock}>
                    <div className={s.name}>Vadim Karpenko</div>
                    <p>React front-end developer</p>
                </div>
                <div className={s.infoPhoto}>
                    <div className={s.photo}><img src={ava} alt={'avatar'}/></div>
                    <div className={s.aboutMeText}>
                        <p>Hello. I am a frontend developer. I love programming, music and my
                            family. I am 29 years old, I am not afraid of obstacles and difficulties, I am ready for any
                            task.</p>
                        <p>Why do you need me? I am goal oriented, positive and hardworking. Ready to learn everything new.</p>
                        <p>Per aspera ad astra</p>
                    </div>
                </div>

            </div>


        </div>
    )
}