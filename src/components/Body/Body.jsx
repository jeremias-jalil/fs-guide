import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../context/context';

import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { updateReference } from '../../functions/api';

export default function Body({ filter, filterItem, references, reload }) {

    const [currentList, setCurrentList] = useState([])
    const { userAcces } = useAppContext()

    useEffect(() => {
        if (filter) {
            setCurrentList(references.filter((e) => e[filterItem] === filter.id))
        } else {
            setCurrentList(references)
        }
        // eslint-disable-next-line
    }, [filter, references])

    function acept(id) {
        updateReference({ "public": 'acept' }, id, userAcces)
        reload()
    }

    function reyect(id) {
        updateReference({ "public": "deleted" }, id, userAcces)
        reload()
    }

    return (
        <div className="container">
            <h1>{filter?.name}</h1>
            <div className="row">
                {currentList.map(ref =>
                    <div className="col-sm-4">
                        <div class="card" style={{ width: '98%' }}>
                            <div class="card-header">
                                <div class="github" onClick={() => window.open(`https://github.com/${ref.user}`, '_blank')}><FontAwesomeIcon icon={faGithub} />{ref.user}</div>
                                <div>
                                    <div >
                                        {userAcces ? <FontAwesomeIcon className="ok" icon={faCheckCircle} onClick={() => acept(ref.id)} /> : ""}
                                        {userAcces ? <FontAwesomeIcon className="noOk" icon={faTimesCircle} onClick={() => reyect(ref.id)} /> : ""}
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                {ref.public === 'pending' ? <h5 class="card-title">{ref.name}</h5> : <></>}
                                <LinkPreview url={ref.link} width='100%' descriptionLength='150' key={ref.id} textAlign='right' />
                                {ref.public === 'pending' ? <p class="card-text">{ref.description}</p> : <></>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
