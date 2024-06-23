// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CadastroAluno from './components/CadastroAluno';
import CadastroCT from './components/CadastroCT';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-student" element={<CadastroAluno />} />
        <Route path="/register-ct" element={<CadastroCT />} />
      </Routes>
    </Router>
  );
}

export default App;
