import React from "react";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div>
      <Header />
      <h2>Bienvenido a tu Perfil</h2>
      <p>Esta es la página de tu perfil.</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
}
