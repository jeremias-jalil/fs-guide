import React, { useState, useEffect } from 'react'
import PageBase from '../PageBase/PageBase'
import NavBar from '../../components/NavBar/NavBar'
import FiltaerBar from '../../components/FilterBar/FiltaerBar'
import Body from '../../components/Body/Body'
import {getAllReferences, searchByNameApi } from '../../functions/api'
import { useAppContext } from '../../context/context'

export default function Home() {

    const [items, setItems] = useState([])
    const [subcategory, setSubcategory] = useState(null)

    const { categorys, search,reload } = useAppContext()
   
    useEffect(() => {
        if (search.length) {
            searchByName(search)
        } else {
            getApi()
        }
    }// eslint-disable-next-line
        , [search])

    async function getApi() {
        reload(true)
        const references = await getAllReferences()
        setItems(references)
        reload(false)
    }

    console.log(categorys)

    function filterBySubcategoryId(id) {
        setSubcategory(id)
    }

    async function searchByName(search) {
        reload(true)
        const searchResult = await searchByNameApi(search)
        setItems(searchResult)
        reload(false)

    }

    return (
        <div className="home">
            <PageBase
                nav={<NavBar/>}
                filter={<FiltaerBar items={categorys} filterAction={filterBySubcategoryId} />}
                body={<Body filter={subcategory} filterItem='subcategoryId' references={items} />} />
        </div>
    )
}
