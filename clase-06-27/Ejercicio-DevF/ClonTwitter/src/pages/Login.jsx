import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("currentUser", JSON.stringify(userFound));
      navigate("/profile");
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <section className="login-container">
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button>Iniciar sesión</button>
      </form>
    </section>
  );
}
