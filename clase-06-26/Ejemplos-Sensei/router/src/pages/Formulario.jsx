import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Formulario() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`formulario enviado con nombre: ${nombre} y email: ${email}`);
    navigate("/Enviado", { state: { nombre, email } });
  };

  return (
    <section>
      <Header></Header>
      <section>
        <h1>Habla con un asesor</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nombre}
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </section>
  );
}
