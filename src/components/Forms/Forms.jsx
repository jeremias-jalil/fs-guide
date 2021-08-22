import React, { useState} from 'react'
import { newReference } from '../../functions/api'
import { useHistory } from 'react-router'
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import Coments from '../Coments/Coments';

export default function Forms({ categorys }) {

    const initialState = {
        name: '',
        description: '',
        link: '',
        category: '',
        user: '',
        subcategory: '',
        public: 'pending'
    }
    const [referenceInfo, setReferenceInfo] = useState(initialState)
    const [multi, setMulti] = useState(false)

    const history = useHistory()

    function setData(e) {
        let dataName = e.target.name
        let dataValue = e.target.value
        setReferenceInfo({ ...referenceInfo, [dataName]: dataValue })
    }

    function sendData(e) {
        e.preventDefault()
        newReference(referenceInfo)
        if (multi) {
            const user=referenceInfo.user
            setReferenceInfo({...initialState, user: user })
        }
        else {
            setReferenceInfo(initialState)
            history.push(`/home`)
        }
    }

     return (
        <div className='aport card'>
            <div class="card-body">
            
                <h3 class="card-title">Aporta a la guia un enlace que te parezca interesante para compartir</h3>
                <form class="row g-3" onSubmit={(e) => sendData(e)}>
                    <div class="col-md-6">
                        <input class="form-control" type='text' placeholder="Título" name="name" onChange={(e) => setData(e)} value={referenceInfo.name} required />
                    </div>
                    <div class="col-md-6">
                        <input class="form-control" type='url' placeholder="Url" name="link" onChange={(e) => setData(e)} value={referenceInfo.link} required />
                    </div>
                    <div class="col-md-12">
                        <textarea class="form-control" type='text' placeholder="Descripción, esto ayuda al buscador" name="description" rows="3" onChange={(e) => setData(e)} value={referenceInfo.description} required />
                    </div>
                    <div class="col-md-3">
                        <select class="form-select form-select-lg mb-3" name="category" onChange={(e) => setData(e)} value={referenceInfo.category}required>
                            <option selected>Categoría</option>
                            {categorys.map(e => <option value={e.id}>{e.name}</option>)}
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select form-select-lg mb-3" name="subcategory" onChange={(e) => setData(e)} required>
                            <option selected>Subcategoría</option>
                            {categorys[referenceInfo.category]?.subcategories.map(e => <option value={e.id}>{e.name}</option>)}
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input class="form-control" type='text' name="user" placeholder="Tu nombre de usuario de GitHub" onChange={(e) => setData(e)} value={referenceInfo.github} required />
                    </div>
                    {referenceInfo.link ? <LinkPreview url={referenceInfo.link} width='100%' /> : <></>}
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </div>
                </form>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" onChange={(e) => setMulti(e.target.checked)} id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Activar para hacer multiples aportes
                    </label>
                </div>
            </div>
            <Coments/>
        </div>
    )
}
