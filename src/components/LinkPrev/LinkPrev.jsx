import React from 'react'
import loadingGif from '../../loading.gif'

export default function LinkPrev({ img, title, short, url, name, description }) {

    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={!img.length ? loadingGif : img} className="card-img-top img-fluid rounded mx-auto d-block" alt={title} onClick={() => { window.open(url, '_blank') }} style={{ height: '200px', width: 'auto' }}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title || name}</h5>
                        <p className="card-text">{short || description}</p>
                        <a href={url} target='_blank' className="btn btn-primary" rel="noreferrer">Visitar página</a>
                    </div>
                </div>
            </div>
        </div>
    )

}
