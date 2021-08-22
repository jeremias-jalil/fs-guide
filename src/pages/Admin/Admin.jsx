import React, { useState, useEffect } from 'react'
import PageBase from '../PageBase/PageBase'
import NavBar from '../../components/NavBar/NavBar'
import FiltaerBar from '../../components/FilterBar/FiltaerBar'
import Body from '../../components/Body/Body'
import { getAllPendingReferences } from '../../functions/api'
import { useAppContext } from '../../context/context'
import { useHistory } from 'react-router'

export default function Admin() {
    const history = useHistory()

    const { userAcces, categorys } = useAppContext()

    const [items, setItems] = useState([])
    const [subcategory, setSubcategory] = useState(null)
    const [reload, setReload] = useState(true)

    useEffect(() => {
        if (!userAcces) {
            history.push('/login')
        } else {

            const getApi = async () => {
                const references = await getAllPendingReferences(userAcces)
                setItems(references)
            }
            getApi()
        }
    }// eslint-disable-next-line
        , [reload])

    function filterBySubcategoryId(id) {
        setSubcategory(id)
    }

    function reloaded() {
        setReload(!reload)
    }

    return (
        <div>
            <PageBase
                nav={<NavBar />}
                filter={<FiltaerBar items={categorys} filterAction={filterBySubcategoryId} />}
                body={<Body filter={subcategory} filterItem='subcategoryId' references={items} reload={reloaded} />} />
        </div>
    )
}
