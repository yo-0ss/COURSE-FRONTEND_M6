import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Enviado() {
  const location = useLocation();
  const nombre = location.state?.nombre || "Personita Desconocida";
  const email = location.state?.email || "Email Desconocido";
  const asunto = location.state?.asunto || "Asunto Desconocido";
  const mensaje = location.state?.mensaje || "Mensaje Desconocido";
  return (
    <div>
      <Header />
      <h1>Formulario Enviado</h1>
      <h2>Detalles del Mensaje:</h2>
      <p>
        <strong>Nombre:</strong> {nombre}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Asunto:</strong> {asunto}
      </p>
      <p>
        <strong>Mensaje:</strong> {mensaje}
      </p>
    </div>
  );
}
