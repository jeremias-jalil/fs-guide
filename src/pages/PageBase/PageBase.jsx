import React from 'react'
import style from './PageBase.module.css'
import Footer from '../../components/Footer/Footer'

export default function PageBase({nav, filter, body}) {
    return (
        <div className={style.container}>
            <div className={style.nav}>
                {nav}
            </div>
            <div className={style.filter}>
                {filter}
            </div>
            <div className={style.body}>
                {body}
            </div>
            <div className={style.foot}>
                <Footer/>
            </div>
        </div>
    )
}
