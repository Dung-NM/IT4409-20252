import { createContext, useEffect, useState } from "react";
import { authApi } from "../api/authApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // check login khi reload trang
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await authApi.me();
        setUser(res.data.data);
      } catch (err) {
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // login thật
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (e) {}

    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;