import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TelaInicialAluno } from "./screens/TelaInicialAluno/TelaInicialAluno";
import { TelaInicialScreen } from "./screens/TelaInicialScreen/TelaInicialScreen";
import { TelaPsSeleo } from "./screens/TelaPsSeleo/TelaPsSeleo";
import { TelaIogin } from "./screens/TelaIogin/TelaIogin";
import { TelaIoginScreen } from "./screens/TelaIoginScreen/TelaIoginScreen";
import { InicialMesmo } from "./screens/InicialMesmo/InicialMesmo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicialMesmo />} />
        <Route path="/login" element={<TelaIogin />} />
        <Route path="/tela-inicial-aluno" element={<TelaInicialAluno />} />
        <Route path="/tela-inicial-treinador" element={<TelaInicialScreen />} />
        <Route path="/tela-pos-selecao" element={<TelaPsSeleo />} />
      </Routes>
    </Router>
  );
};

export default App;
