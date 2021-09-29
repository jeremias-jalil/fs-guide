import React, { useState, useEffect } from 'react'
import { newReference } from '../../functions/api'
import { useHistory } from 'react-router'
import Coments from '../Coments/Coments';
import LinkPrev from '../LinkPrev/LinkPrev';
import { fetchData } from '../../functions/getMeta';

export default function Forms({ categorys }) {

    const initialState = {
        name: '',
        description: '',
        link: '',
        category: '',
        user: '',
        subcategory: '',
        public: 'pending',
    }
    const [referenceInfo, setReferenceInfo] = useState(initialState)
    const [multi, setMulti] = useState(false)

    const history = useHistory()

    async function setMeta() {
        const meta = await fetchData(referenceInfo.link)
        setReferenceInfo({ ...referenceInfo, image: meta.img, title: meta.title, short: meta.description?.substring(0, 150) + '...' })
    }

    useEffect(() => {
        setMeta()// eslint-disable-next-line
        
    }, [referenceInfo.link])

    function setData(e) {
        let dataName = e.target.name
        let dataValue = e.target.value
        setReferenceInfo({ ...referenceInfo, [dataName]: dataValue })
    }

    function sendData(e) {
        e.preventDefault()
        newReference(referenceInfo)
        if (multi) {
            const user = referenceInfo.user
            setReferenceInfo({ ...initialState, user: user })
        }
        else {
            setReferenceInfo(initialState)
            history.push(`/home`)
        }
    }

 
    return (

            <div className='aport card'>
                <div className="card-body">

                    <h3 className="card-title">Aporta a la guia un enlace que te parezca interesante para compartir</h3>
                    <form className="row g-3" onSubmit={(e) => sendData(e)}>
                        <div className="col-md-6">
                            <input className="form-control" type='text' placeholder="Título" name="name" onChange={(e) => setData(e)} value={referenceInfo.name} required />
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" type='url' placeholder="Url" name="link" onChange={(e) => setData(e)} value={referenceInfo.link} required />
                        </div>
                        <div className="col-md-12">
                            <textarea className="form-control" type='text' placeholder="Descripción, esto ayuda al buscador" name="description" rows="3" onChange={(e) => setData(e)} value={referenceInfo.description} required />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select form-select-lg mb-3" name="category" onChange={(e) => setData(e)} value={referenceInfo.category} required>
                                <option selected>Categoría</option>
                                {categorys.map(e => <option value={e.id}>{e.name}</option>)}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select form-select-lg mb-3" name="subcategory" onChange={(e) => setData(e)} required>
                                <option selected>Subcategoría</option>
                                {categorys.find(e=>e.id*1===referenceInfo.category*1)?.subcategories.map(e => <option value={e.id}>{e.name}</option>)}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" type='text' name="user" placeholder="Tu nombre de usuario de GitHub" onChange={(e) => setData(e)} value={referenceInfo.github} required />
                        </div>
                        {referenceInfo.link ? <LinkPrev img={referenceInfo.image} title={referenceInfo.title} description={referenceInfo.short} url={referenceInfo.link} /> : <></>}
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Enviar</button>
                        </div>
                    </form>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={(e) => setMulti(e.target.checked)} id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Activar para hacer multiples aportes
                        </label>
                    </div>
                </div>
                <Coments />
            </div>

  
    )
}
