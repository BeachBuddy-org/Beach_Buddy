// src/components/ProtectedRoute.js
import React from "react";
import { useAuth } from "../screens/contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const getRedirectPath = () => {
    console.log(location.pathname);
    if (location.pathname.startsWith("/tela-inicial-treinador")) {
      return "/tela-login-treinador";
    } else if (location.pathname.startsWith("/tela-inicial-gerente")) {
      return "/tela-login-gerente";
    } else {
      return "/tela-login-aluno";
    }
  };

  return isAuthenticated ? element : <Navigate to={getRedirectPath()} />;
};

export default ProtectedRoute;
