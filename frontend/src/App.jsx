// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./screens/contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import { Home } from "./screens/Home";
import { Tela_Home_Aluno } from "./screens/Tela_Home_Aluno";
import { Tela_Home_Gerente } from "./screens/Tela_Home_Gerente";
import { Tela_Home_Treinador } from "./screens/Tela_Home_Treinador";
import { TelaLoginAluno } from "./screens/TelaLoginAluno";
import { TelaLoginGerente } from "./screens/TelaLoginGerente";
import { TelaLoginTreinador } from "./screens/TelaLoginTreinador";
import { CadastroAluno } from "./screens/CadastroAluno";
import { CadastroGerente } from "./screens/CadastroGerente";
import { CadastroTreinador } from "./screens/CadastroTreinador";
import { TelaInicialAluno } from "./screens/TelaInicialAluno";
import { TelaInicialGerente } from "./screens/TelaInicialGerente";
import { TelaInicialTreinador } from "./screens/TelaInicialTreinador";
import { Aluno_Painel_Treinos } from "./screens/Aluno_Painel_Treinos";
import { Gerente_Painel_CT } from "./screens/Gerente_Painel_CT";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tela-home-aluno",
    element: <Tela_Home_Aluno />,
  },
  {
    path: "/tela-home-gerente",
    element: <Tela_Home_Gerente />,
  },
  {
    path: "/tela-home-treinador",
    element: <Tela_Home_Treinador />,
  },
  {
    path: "/tela-inicial-aluno",
    element: <ProtectedRoute element={<TelaInicialAluno />} />,
  },
  {
    path: "/tela-inicial-treinador",
    element: <ProtectedRoute element={<TelaInicialTreinador />} />,
  },
  {
    path: "/tela-inicial-gerente",
    element: <ProtectedRoute element={<TelaInicialGerente />} />,
  },
  {
    path: "/tela-aluno-painel-treinos/:ctId",
    element: <Aluno_Painel_Treinos />,
  },
  {
    path: "/tela-gerente-painel-ct/:ctId",
    element: <ProtectedRoute element={<Gerente_Painel_CT />} />,
  },
  {
    path: "/tela-login-aluno",
    element: <TelaLoginAluno />,
  },
  {
    path: "/tela-login-gerente",
    element: <TelaLoginGerente />,
  },
  {
    path: "/tela-login-treinador",
    element: <TelaLoginTreinador />,
  },
  {
    path: "/cadastro-aluno",
    element: <CadastroAluno />,
  },
  {
    path: "/cadastro-gerente",
    element: <CadastroGerente />,
  },
  {
    path: "/cadastro-treinador",
    element: <CadastroTreinador />,
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
