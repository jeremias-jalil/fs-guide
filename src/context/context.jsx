import React, { useState, createContext, useMemo, useContext, useEffect } from 'react'
import { getAllCategorys } from '../functions/api'

const appContext = createContext()

export function AppContextProvider(props) {
    const [userAcces, setUserAcces] = useState(false)
    const [categorys, setCategorys] = useState([])
    const [search, setSearch] = useState('')
    const [load, setLoad] = useState(true)
    console.log(search)

    useEffect(() => {
        getCategoryApi()
    }, [])

    async function getCategoryApi() {
        let categorys = await getAllCategorys()
        const others = categorys.find(e=>e.name==="Others")
        categorys = categorys.filter(e=>e.name !=="Others" )
        categorys.push(others)
        
        setCategorys(categorys)
    }

    function authorization(status) {
        setUserAcces(status)
    }

    function getSearch(data) {
        setSearch(data)

    }

    function resetSearch() {
        setSearch('')
    }

    function reload(value) {
        setLoad(value)
    }


    const value = useMemo(() => {
        return ({
            userAcces,
            authorization,
            categorys,
            search,
            getSearch,
            resetSearch,
            load,
            reload
        })// eslint-disable-next-line
    }, [userAcces, categorys, search, load])

    return <appContext.Provider value={value} {...props} />
}

export function useAppContext() {
    const context = useContext(appContext)
    if (!context) {
        throw new Error('Error en useContext')
    } else {
        return context
    }

}