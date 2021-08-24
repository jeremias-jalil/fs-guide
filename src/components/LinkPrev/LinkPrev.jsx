import React from 'react'
import loadingGif from '../../loading.gif'
import logo from '../../logo-oscuro.png'

export default function LinkPrev({ img, title, description, url }) {

    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={!img.length ? loadingGif : img || logo} className="card-img-top" alt={title} onClick={() => { window.open(url, '_blank') }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target='_blank' className="btn btn-primary" rel="noreferrer">Visitar página</a>
                    </div>
                </div>
            </div>
        </div>
    )

}
