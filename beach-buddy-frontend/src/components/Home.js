// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Beach Buddy</h1>
      <Link to="/register-student"><button>Cadastrar Aluno</button></Link>
      <Link to="/register-ct"><button>Cadastrar CT</button></Link>
    </div>
  );
}

export default Home;
