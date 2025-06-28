import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "yoss.rios27@gmail.com" && password === "1234") {
      localStorage.setItem("auth", "true");
      navigate("/profile");
    } else {
      alert("Contraseña o correo incorrecto");
    }
  };

  return (
    <section>
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <input
            type="text"
            placeholder="Correo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button>Enviar</button>
      </form>
    </section>
  );
}
