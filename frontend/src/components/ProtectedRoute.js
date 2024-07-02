// src/components/ProtectedRoute.js
import React from "react";
import { useAuth } from "../screens/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/tela-login-aluno" />;
};

export default ProtectedRoute;
