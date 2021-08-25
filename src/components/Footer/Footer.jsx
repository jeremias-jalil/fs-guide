import React from 'react'
import logoBlanco from '../../logo-blanco.png'

export default function Footer() {

    return (

        <nav className="navbar navbar-dark bg-dark footer">
            <div className="container-md">
                <img src={logoBlanco} className="logoFoot" alt='logoFoot'/>
                <a className="navbar-brand" href="https://www.linkedin.com/in/jeremiasjalil/" target="_blank" rel="noreferrer">Desarrollo de Jeremias Jalil</a>
            </div>
        </nav>

    )
}
