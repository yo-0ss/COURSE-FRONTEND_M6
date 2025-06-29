import React from "react";
import Header from "../components/Header.jsx";

export default function NotFound() {
  return (
    <div>
      <Header />
      <h1>Página No Encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>Por favor, verifica la URL o regresa a la página de inicio.</p>
    </div>
  );
}
