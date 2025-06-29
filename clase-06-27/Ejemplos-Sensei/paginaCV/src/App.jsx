import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contactame from "./pages/Contactame";
import Enviado from "./pages/Enviado";
import NotFound from "./pages/NotFound";
import ProtectRoute from "./components/ProtectRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactame" element={<Contactame />} />
        <Route
          path="/enviado"
          element={
            <ProtectRoute>
              <Enviado />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
