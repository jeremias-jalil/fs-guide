import React, { useState, createContext, useMemo, useContext, useEffect } from 'react'
import { getAllCategorys } from '../functions/api'

const appContext = createContext()

export function AppContextProvider(props) {
    const [userAcces, setUserAcces] = useState(false)
    const [categorys, setCategorys] = useState([])
  

    useEffect(() => {
        getCategoryApi()
    }, [])

    async function getCategoryApi() {
        const categorys = await getAllCategorys()
        setCategorys(categorys)
    }

    function authorization(status) {
        setUserAcces(status)
    }


    const value = useMemo(() => {
        return ({
            userAcces,
            authorization,
            categorys
        })
    }, [userAcces,categorys])

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