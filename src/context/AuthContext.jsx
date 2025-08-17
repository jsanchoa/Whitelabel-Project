import { createContext, useState, useEffect } from "react";
import api from "@/api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar si ya hay sesión (token en cookie)
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await api.get("/v1/profile"); // backend responde si el token es válido
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const login = async (username, password) => {
    const res = await api.post("/v1/login", { username, password });
    if (res.data.success) {
      // backend guardó cookie automáticamente
      const perfil = await api.get("/v1/profile");
      setUser(perfil.data.user);
    }
  };

  const logout = async () => {
    await api.post("/v1/logout"); // backend borra la cookie
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
