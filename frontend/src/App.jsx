import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TelaInicialAluno } from "./screens/TelaInicialAluno";
import { TelaInicialScreen } from "./screens/TelaInicialScreen";
import { TelaPsSeleo } from "./screens/TelaPsSeleo";
import { TelaIogin } from "./screens/TelaIogin";
import { TelaIoginScreen } from "./screens/TelaIoginScreen";
import { InicialMesmo } from "./screens/InicialMesmo";
import { Cadastro } from "./screens/Cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicialMesmo />,
  },
  {
    path: "/tela-inicial-aluno",
    element: <TelaInicialAluno />,
  },
  {
    path: "/tela-inicial-treinador",
    element: <TelaInicialScreen />,
  },
  {
    path: "/tela-pos-selecao",
    element: <TelaPsSeleo />,
  },
  {
    path: "/tela-iogin-1",
    element: <TelaIogin />,
  },
  {
    path: "/tela-iogin-2",
    element: <TelaIoginScreen />,
  },
  {
    path: "/cadastro-u351",
    element: <Cadastro />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
