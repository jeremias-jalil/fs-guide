import React from 'react'
import logo from '../../logo-oscuro.png'
import { useHistory } from 'react-router'


export default function Empti() {
    const history = useHistory()
    return (
        <div className="card">
        <div className="row g-0">
            <div className="col-md-2">
                <img src={logo} className="card-img-top" alt={logo} />
            </div>
            <div className="col-md-10">
                <div className="card-body">
                    <h5 className="card-title">"No hay aportes en esta categoría :'("</h5>
                    <p className="card-text">Si te animás, podes aportar a la comunidad</p>
                    <button target='_blank' className="btn btn-primary" rel="noreferrer" onClick={()=>history.push("/newreference")}>Aportar</button>
                </div>
            </div>
        </div>
    </div>
    )
}
