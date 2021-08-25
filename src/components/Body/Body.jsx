import React, { useState, useEffect } from 'react'
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Masonry from 'react-masonry-css'

import LinkPrev from '../LinkPrev/LinkPrev';
import { useAppContext } from '../../context/context';
import loadingGif from '../../loading.gif'
import { updateReference } from '../../functions/api';
import Empti from '../Empti/Empti';

export default function Body({ filter, filterItem, references }) {

    const [currentList, setCurrentList] = useState([])
    const { userAcces, load, reload } = useAppContext()

    useEffect(() => {
        if (filter) {
            setCurrentList(references.filter((e) => e[filterItem] === filter.id))
        } else {
            setCurrentList(references)
        }
        // eslint-disable-next-line
    }, [filter, references, load])

    async function acept(id) {
        reload(true)
        await updateReference({ "public": 'acept' }, id, userAcces,reload)
        reload(false)
    }

    async function reyect(id) {
        reload(true)
        await updateReference({ "public": "deleted" }, id, userAcces)
        reload(false)
    }

    const breakpoints={
        default:3,
        1100:2,
        700:1
    }

    return (
        <div className="container" >
            <h1>{filter?.name}</h1>
            {load? 
            <img src={loadingGif}  className="rounded mx-auto d-block" alt="loadGif"/>
            :!currentList.length? <Empti/> :
            <Masonry breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">

                {currentList.map(ref =>
                    <div key={ref.id}>
                        <div className="card" style={{ width: '98%' }}>
                            <div className="card-header">
                                <div className="github" onClick={() => window.open(`https://github.com/${ref.user}`, '_blank')}><FontAwesomeIcon icon={faGithub} />{ref.user}</div>
                                <div>
                                    <div >
                                        {userAcces ? <FontAwesomeIcon className="ok" icon={faCheckCircle} onClick={() => acept(ref.id)} /> : ""}
                                        {userAcces ? <FontAwesomeIcon className="noOk" icon={faTimesCircle} onClick={() => reyect(ref.id)} /> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{ width: 'width: 18rem' }}>
                                {ref.public === 'pending' ? <h5 className="card-title">{ref.name}</h5> : <></>}
                                <LinkPrev img={ref.image} title={ref.title} short={ref.short} url={ref.link} name={ref.name} description={ref.description} />
                                {ref.public === 'pending' ? <p className="card-text">{ref.description}</p> : <></>}
                            </div>
                        </div>
                    </div>
                )}

            </Masonry>}

        </div>
    )
}
