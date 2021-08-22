import React from 'react'

export default function LinkView({ loading, preview }) {
    return loading 
    ? (<h1>Loading...</h1>)
    : (
        <div>
            <p>Domain: { preview.domain }</p>
            <p>Title: { preview.title }</p>
            <p>Description: { preview.description }</p>
            <img height="100px" width="100px" src={preview.img} alt={preview.title} />
        </div>
    )
}
