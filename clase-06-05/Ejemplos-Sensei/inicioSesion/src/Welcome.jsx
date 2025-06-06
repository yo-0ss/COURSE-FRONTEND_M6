import React from "react";

export default function Welcome({onLogout, username}) {
    return (
        <section>
            <h1>Bienvenido, {username}</h1>
            <button onClick={onLogout}>Cerrar Sesion</button>
        </section>
    )
}