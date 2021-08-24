import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router'
import logo from '../../logo-oscuro.png'
import { useAppContext } from '../../context/context';

export default function NavBar() {

    const [searchInput, setSearchInput] = useState('')
    const history = useHistory()

    const { getSearch, resetSearch, reload } = useAppContext()
    
    function home() {
        resetSearch()
        reload()
        history.push('/home')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img className="navbar-brand logoNav" src={logo} alt='logonav' onClick={() =>home()} />
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="nav-link active" to="/home" onClick={() => home()}>Inicio </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" activeClassName="nav-link active" to="/newreference">Aportar</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" activeClassName="nav-link active" to="/admin">Administrar</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={(e) => {
                        e.preventDefault()
                        history.push('/home')
                        getSearch(searchInput)
                        setSearchInput('')
                    }}>
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
                        <button className="btn btn-primary" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
