import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Bem-vindo ao Beach Buddy</h1>
      <Link to="/register-student" className="button-link">Cadastrar Aluno</Link>
      <Link to="/register-ct" className="button-link">Cadastrar CT</Link>
    </div>
  );
}

export default Home;
