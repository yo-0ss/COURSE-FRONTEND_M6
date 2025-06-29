import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Contactame() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`formulario enviado con nombre: ${nombre} y email: ${email}`);
    navigate("/Enviado", { state: { nombre, email, asunto, mensaje } });
  };

  return (
    <div>
      <Header />
      <h1>Contáctame</h1>
      <p>Si tienes alguna pregunta o comentario, no dudes en contactarme.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="nombre">Nombre:</label>
          <input
            type="text"
            value={nombre}
            placeholder="Escribe tu nombre"
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="email">Correo electrónico:</label>
          <input
            type="email"
            value={email}
            placeholder="ejemplo@correo.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="asunto">Asunto:</label>
          <select value={asunto} onChange={(e) => setAsunto(e.target.value)} required>
            <option>Consulta</option>
            <option>Sugerencia</option>
            <option>Queja</option>
            <option>Otro</option>
          </select>
        </div>
        <div>
          <label for="mensaje">Mensaje:</label>
          <textarea
            value={mensaje}
            rows="2"
            placeholder="Escribe tu mensaje aquí..."
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
