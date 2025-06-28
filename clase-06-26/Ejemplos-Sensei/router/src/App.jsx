import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Formulario from "./pages/Formulario";
import Enviado from "./pages/Enviado";
import ProtectRoute from "./components/ProtectRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/enviado" element={<Enviado />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
