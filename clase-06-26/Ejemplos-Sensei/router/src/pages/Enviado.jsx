import { useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function Enviado() {
  const location = useLocation();
  const nombre = location.state?.nombre || "Personita Desconocida";
  const email = location.state?.email || "Email Desconocido";

  return (
    <div>
      <Header></Header>
      <h1>Formulario Enviado</h1>
      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
      <p>Gracias por enviar el formulario.</p>
    </div>
  );
}
