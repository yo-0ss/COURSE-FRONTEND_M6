import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectRoute from "./components/ProtectRoute";
import Usuarios from "./components/Usuarios";
import "./App.css";

function App() {
  return (
    <>
      <Usuarios />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
