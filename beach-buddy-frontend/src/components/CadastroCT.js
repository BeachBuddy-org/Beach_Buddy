import React, { useState } from 'react';

const CadastroCT = () => {
  const [gerente, setGerente] = useState({
    username: '',
    email: '',
    cpf: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const [ct, setCT] = useState({
    name: '',
    cnpj: '',
    address: ''
  });

  const handleGerenteChange = (e) => {
    const { name, value } = e.target;
    setGerente({ ...gerente, [name]: value });
  };

  const handleCTChange = (e) => {
    const { name, value } = e.target;
    setCT({ ...ct, [name]: value });
  };

  const handleGerenteSubmit = (e) => {
    e.preventDefault();
    // Enviar dados do gerente para o backend
    console.log(gerente);
  };

  const handleCTSubmit = (e) => {
    e.preventDefault();
    // Enviar dados do CT para o backend
    console.log(ct);
  };

  return (
    <div className="container">
      <h2>Cadastrar Gerente</h2>
      <form onSubmit={handleGerenteSubmit}>
        <input type="text" name="username" placeholder="Nome de Usuário" onChange={handleGerenteChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleGerenteChange} />
        <input type="text" name="cpf" placeholder="CPF" onChange={handleGerenteChange} />
        <input type="text" name="firstName" placeholder="Nome" onChange={handleGerenteChange} />
        <input type="text" name="lastName" placeholder="Sobrenome" onChange={handleGerenteChange} />
        <input type="password" name="password" placeholder="Senha" onChange={handleGerenteChange} />
        <button type="submit">Cadastrar Gerente</button>
      </form>

      <h2>Cadastrar CT</h2>
      <form onSubmit={handleCTSubmit}>
        <input type="text" name="name" placeholder="Nome do CT" onChange={handleCTChange} />
        <input type="text" name="cnpj" placeholder="CNPJ" onChange={handleCTChange} />
        <input type="text" name="address" placeholder="Endereço" onChange={handleCTChange} />
        <button type="submit">Cadastrar CT</button>
      </form>
    </div>
  );
}

export default CadastroCT;
