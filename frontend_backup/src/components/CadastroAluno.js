import React, { useState } from 'react';
import '../styles.css'; // Certifique-se de que o caminho está correto

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
    fetch('http://127.0.0.1:5000/api/register', {  // Certifique-se de que esta URL está correta
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...aluno, type: 'aluno' })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert("Aluno cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar aluno, tente novamente.");
        }
    })
    .catch(error => {
        console.error("Erro ao cadastrar aluno:", error);
        alert("Erro ao cadastrar aluno.");
    });
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
