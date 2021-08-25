import React from 'react'

export default function Coments({style}) {
    return (
        <div className='aport card coment' style={style}>
            <div className="card-body">
                <h5 className="card-title">Publicación</h5>
                <p className="card-text">Estos aportes serán publicados una vez sean aprobados por el administrador.</p>
                <p className="card-text">El fin de estos aportes es poder ayudar a los nuevos Full Stack Developer a encontrar facilmente la información para sus proyectos</p>
                <b className="card-text">Muchas gracias :D</b>
            </div>
        </div>
    )
}
