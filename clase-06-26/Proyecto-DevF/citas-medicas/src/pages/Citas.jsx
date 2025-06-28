import { Link } from "react-router-dom";
import Header from "../components/Header";

function Citas() {
  const citas = [
    { id: 1, descripcion: "Cita con el dentista" },
    { id: 2, descripcion: "Cita con el doctor" },
  ];

  return (
    <div>
      <Header></Header>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>{cita.descripcion}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
