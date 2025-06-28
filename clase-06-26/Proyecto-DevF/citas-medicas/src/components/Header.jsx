import { Link } from "react-router-dom";

import "../app.css";

function Header() {
  return (
    <header>
      <h1>Sistema de Citas</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/citas">Ver Citas</Link>
      </nav>
    </header>
  );
}

export default Header;
