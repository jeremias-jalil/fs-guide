import React from 'react'
import FilterIcon from '../FilterIcon/FilterIcon'
import getIconCategory from '../../functions/IcoRef/categorys'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function FiltaerBar({ items, filterAction }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faFilter} key='minus' />
                </div>
                <div className="collapse navbar-collapse " id="navbarScroll">
                    <div className='content'>
                        <h2>Categorías</h2>
                        <h4 className="FilterReset" onClick={()=>filterAction(null)}>Borrar filtros</h4>
                        {items?.map((e) => (
                            <FilterIcon title={e.name} key={e.id} list={e.subcategories} iconConverter={getIconCategory} filterAction={filterAction} />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
