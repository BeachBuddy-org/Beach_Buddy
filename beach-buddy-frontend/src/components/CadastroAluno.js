import React, { useState } from 'react';

const CadastroAluno = () => {
  const [aluno, setAluno] = useState({
    username: '',
    email: '',
    cpf: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno({ ...aluno, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar dados para o backend
    console.log(aluno);
  };

  return (
    <div className="container">
      <h2>Cadastrar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Nome de Usuário" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="text" name="cpf" placeholder="CPF" onChange={handleChange} />
        <input type="text" name="firstName" placeholder="Nome" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Sobrenome" onChange={handleChange} />
        <input type="password" name="password" placeholder="Senha" onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroAluno;
