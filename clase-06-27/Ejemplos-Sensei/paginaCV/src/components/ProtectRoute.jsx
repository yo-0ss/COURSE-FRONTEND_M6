import { useLocation, Navigate } from "react-router-dom";

export default function ProtectRoute({ children }) {
  const location = useLocation();

  if (!location.state) {
    return <Navigate to="/contactame" replace />;
  }

  return children;
}
