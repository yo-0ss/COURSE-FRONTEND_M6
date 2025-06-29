import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <h1>Twitter</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="nav-item" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/Profile">
              Perfil
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
