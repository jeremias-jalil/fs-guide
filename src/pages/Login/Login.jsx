import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import PageBase from '../PageBase/PageBase'
import NavBar from '../../components/NavBar/NavBar'

export default function Login() {
    return (
        <div className="login">
            <PageBase
                nav={<NavBar />}
                body={<LoginForm />} />
        </div>
    )
}
