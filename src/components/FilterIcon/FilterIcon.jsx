import React, { useState, useEffect } from 'react'
import style from './FilterIcon.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function FilterIcon({ title, list, iconConverter, filterAction}) {
    
    const [ico, setIco] = useState([])
    const [select, setSelect] = useState(0)
    const [active, setActive] = useState(false)
    
    useEffect(() => {
        if (iconConverter) {
            setIco(iconConverter(list))
        }// eslint-disable-next-line
    },[])
    
    function filterActionHandle(id) {
        if (filterAction) {
            filterAction(id)
            setSelect(id)
        }
    }

    function resetFiltersAction() {
        if (filterAction) {
            filterAction(null)
            setSelect(0)
        }
    }


    return (
        <div>
        <div className={style.title} onClick={() => setActive(!active)} data-bs-toggle="collapse" href={`#collapse${title}`} role="button" aria-expanded="false" aria-controls={`collapse${title}`}>
            {active ? <FontAwesomeIcon icon={faChevronDown} key='plus'  /> : <FontAwesomeIcon icon={faChevronRight} key='minus'/>}
            <h3>{title}</h3>
        </div>
        <div className="collapse" id={`collapse${title}`}>
            {filterAction ?
                <div>
                    <em className={style.icon} onClick={() => resetFiltersAction()}> -- All -- </em>
                </div>
                :
                <div></div>
            }
            <div className={style.listIcon}>
                {ico?.map(p => (
                    <div key={p.id} onClick={() => filterActionHandle(p)} className={parseInt(p.id) === parseInt(select) ? style.iconSelected : style.icon}>
                        <FontAwesomeIcon icon={p.icon} key={p.id} />
                        <em> {p.name}</em>
                    </div>)
                )
                }
            </div>
        </div>
    </div>
    )
}
