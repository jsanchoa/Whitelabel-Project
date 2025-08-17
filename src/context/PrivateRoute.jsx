import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Cargando...</p>;

  return user ? children : <Navigate to="/login" />;
}