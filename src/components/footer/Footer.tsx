import React from 'react'
import s from './Footer.module.css'
import git from './common/git.png'
import linkedin from './common/linked.png'
import insta from './common/insta.png'
import fb from './common/fb.png'


export const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>Vadim Karpenko</div>
            <div className={s.buttonsCont}>
                <div className={s.buttons}>
                <a href={'https://github.com/vadimcrmnl1'}
                   title={'vadimcrmnl on GitHub'} target={'_blank'}><img src={git} alt={'GitHub'}/></a>
                <a href={'https://www.linkedin.com/in/vadim-crmnl-94671425b/'}
                title={'Vadim on linkedIn'} target={'_blank'}><img src={linkedin} alt={'LinkedIn'}/></a>
                <a href={'https://www.instagram.com/vadim.crmnl'}
                title={'vadim.crmnl on Instagram'} target={'_blank'}><img src={insta} alt={'Instagram'}/></a>
                <a href={'https://www.facebook.com/vadim.karpenko.5'}
                title={'Vadim Karpenko on Facebook'} target={'_blank'}><img src={fb} alt={'Facebook'}/></a>
                </div>
            </div>
            <div className={s.titleBottom}>2023 All rights reserved</div>
        </div>
    )
}