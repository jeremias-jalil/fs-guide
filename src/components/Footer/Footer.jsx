import React from 'react'
import logoBlanco from '../../logo-blanco.png'

export default function Footer() {

    return (

        <nav class="navbar navbar-dark bg-dark footer">
            <div class="container-md">
                <img src={logoBlanco} className="logoFoot" alt='logoFoot'/>
                <a class="navbar-brand" href="https://www.linkedin.com/in/jeremiasjalil/" target="_blank" rel="noreferrer">Desarrollo de Jeremias Jalil</a>
            </div>
        </nav>

    )
}
