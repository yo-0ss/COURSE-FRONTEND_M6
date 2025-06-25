import { useCallback, useState } from "react";
import React from "react";
import "./App.css";

function ListaNombres({ onFilter }) {
  console.log("Renderizado de la Lista de Nombres");
  return (
    <input
      type="text"
      placeholder="Buscar Nombres"
      onChange={(e) => onFilter(e.target.value)}
    />
  );
}

const MemoLista = React.memo(ListaNombres);

function App() {
  const [nombres] = useState(["armando", "juan", "plabo"]);
  const [filtro, setFiltro] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filtrar = useCallback((value) => {
    setFiltro(value.toLowerCase());
  });

  const resultado = nombres.filter((n) => n.toLowerCase().includes(filtro));

  return (
    <>
      <h1>Bucar Nombre</h1>
      <MemoLista onFilter={filtrar} />
      <ul>
        {resultado.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
