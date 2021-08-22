import React, { useState, useEffect } from 'react'
import PageBase from '../PageBase/PageBase'
import NavBar from '../../components/NavBar/NavBar'
import FiltaerBar from '../../components/FilterBar/FiltaerBar'
import Body from '../../components/Body/Body'
import {getAllReferences, searchByNameApi } from '../../functions/api'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/context'

export default function Home(props) {

    const [items, setItems] = useState([])
    const [subcategory, setSubcategory] = useState(null)
    const [reload, setReload] = useState(true)

    const { categorys } = useAppContext()
  
    const params = useParams()

    useEffect(() => {
        if (params.search) {
            searchByName(params.search)
        } else {
            getApi()
        }
    }// eslint-disable-next-line
        , [reload])

    async function getApi() {
        const references = await getAllReferences()
        setItems(references)
    }

    function filterBySubcategoryId(id) {
        setSubcategory(id)
    }

    async function searchByName(search) {
        const searchResult = await searchByNameApi(search)
        setItems(searchResult)

    }
    function reloaded() {
        setReload(!reload)
    }

    return (
        <div className="home">
            <PageBase
                nav={<NavBar reload={reloaded} />}
                filter={<FiltaerBar items={categorys} filterAction={filterBySubcategoryId} />}
                body={<Body filter={subcategory} filterItem='subcategoryId' references={items} />} />
        </div>
    )
}
