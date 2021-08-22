import React from 'react'
import { useAppContext } from '../../context/context'
import PageBase from '../PageBase/PageBase'
import Forms from '../../components/Forms/Forms'
import NavBar from '../../components/NavBar/NavBar'

export default function NewReference() {
    const { categorys } = useAppContext()

    return (
        <div>
            <PageBase
                nav={<NavBar />}

                body={<Forms categorys={categorys} />} />
        </div>
    )
}
