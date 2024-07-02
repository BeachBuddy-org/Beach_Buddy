// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log("Logging in with user data:", userData); // Log para verificar os dados do usuário
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    console.log("User state updated:", user); // Log para verificar o estado do usuário
  }, [user]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
