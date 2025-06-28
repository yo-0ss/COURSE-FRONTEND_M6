import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <h1>Mi Página</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/Profile">Perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
