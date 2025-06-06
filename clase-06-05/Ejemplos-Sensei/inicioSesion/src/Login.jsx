import React, {useState} from "react";

export default function Login({onLogin}){
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = 'admin'
        const passwordUser = '1234'

        if (username === user && password === passwordUser) {
            setError('')
            onLogin(username)
        }else{
            setError('Usuario o contraseña incorrecta')
        }
    }

    return(
        <section>
            <h1>Iniciar Sesion</h1>

            <form onSubmit={handleSubmit}>
                <section>
                    <label> Usuario: </label>
                    <input type="text" value={username}  onChange={(e) => setUserName(e.target.value)}/>
                </section>
                <section>
                    <label> Contraseña: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </section>
                <button type="submit">Enviar</button>
            </form>
            {error && <p style={{color: 'red'}} > {error}</p>}
        </section>
    )
}