import { useParams } from "react-router-dom";
import Header from "../components/Header";

function CitaDetalle() {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: {id}</p>
    </div>
  );
}

export default CitaDetalle;
