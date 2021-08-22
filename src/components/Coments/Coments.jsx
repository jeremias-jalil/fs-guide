import React from 'react'

export default function Coments({style}) {
    return (
        <div className='aport card coment' style={style}>
            <div className="card-body">
                <h5 class="card-title">Publicación</h5>
                <p class="card-text">Estos aportes serán publicados una vez sean aprobados por el administrador.</p>
                <p class="card-text">El fin de estos aportes es poder ayudar a los nuevos Full Stack Developper a encontrar facilmente la información para sus proyectos</p>
                <b class="card-text">Muchas gracias :D</b>
            </div>
        </div>
    )
}
