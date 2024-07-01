import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    element: <TelaInicialAluno />,
  },
  {
    path: "/tela-inicial-treinador",
    element: <TelaInicialTreinador />,
  },
  {
    path: "/tela-inicial-gerente",
    element: <TelaInicialGerente />,
  },
  {
    path: "/tela-aluno-painel-treinos",
    element: <Aluno_Painel_Treinos />,
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
  return <RouterProvider router={router} />;
};

export default App;
