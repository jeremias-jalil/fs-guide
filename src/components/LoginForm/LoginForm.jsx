import React, { useState } from 'react'
import { loginUser } from '../../functions/api'
import { useAppContext } from '../../context/context'
import { useHistory } from 'react-router'

export default function LoginForm() {
    const history = useHistory()
    const { authorization } = useAppContext()

    const [fail, setFail] = useState(false)

    async function login(e) {
        e.preventDefault()
        try {
            const acces = await loginUser({ email: e.target[0].value, password: e.target[1].value })
            console.log(acces, 'acces')
            authorization(acces.data.token)
            history.push('/admin')
        } catch (err) {
            setFail(true)
            authorization(false)
        }
    }

    return (
        <div className='aport card ' style={{ width: "18rem" }} >
            <div className="card-body">
                <h5 className="card-title">Inicie seción para administrar las entradas</h5>
                <form className="row g-3" onSubmit={(e) => login(e)}>
                    <div className="mb-3">
                        <input className="form-control" type='email' placeholder='email' />
                    </div>
                    <div className="mb-3">
                        <input type='password' className="form-control" placeholder='password' />
                    </div>
                    <div className="mb-3">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                    {fail ? <div class="alert alert-danger" role="alert">
                        Usuario o contraseña incorrectas
                    </div> : ""}
                </form>
            </div>
        </div>
    )
}
