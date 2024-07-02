// src/screens/Gerente_Painel_CT.jsx
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css";

export const Gerente_Painel_CT = () => {
  const { ctId } = useParams();
  const [alunoData, setAlunoData] = useState({ username: "", email: "", cpf: "" });
  const [treinadorData, setTreinadorData] = useState({ username: "", email: "", cpf: "" });
  const [treinoData, setTreinoData] = useState({ date: "", horario: "", nivel: "", recorrente: false });

  const handleAlunoChange = (e) => {
    const { name, value } = e.target;
    setAlunoData({ ...alunoData, [name]: value });
  };

  const handleTreinadorChange = (e) => {
    const { name, value } = e.target;
    setTreinadorData({ ...treinadorData, [name]: value });
  };

  const handleTreinoChange = (e) => {
    const { name, value } = e.target;
    setTreinoData({ ...treinoData, [name]: value });
  };

  const handleAlunoSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/register_aluno", { ...alunoData, ct_id: ctId });
      alert("Aluno cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
      alert("Erro ao cadastrar aluno.");
    }
  };

  const handleTreinadorSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/register_treinador", { ...treinadorData, ct_id: ctId });
      alert("Treinador cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar treinador:", error);
      alert("Erro ao cadastrar treinador.");
    }
  };

  const handleTreinoSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/create_treino", { ...treinoData, ctId });
      alert("Treino criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar treino:", error);
      alert("Erro ao criar treino.");
    }
  };

  return (
    <div className="gerente-painel-ct">
      <h1>Painel do CT</h1>
      
      <div className="form-section">
        <h2>Cadastrar Aluno</h2>
        <form onSubmit={handleAlunoSubmit}>
          <input type="text" name="username" placeholder="Nome de Usuário" value={alunoData.username} onChange={handleAlunoChange} />
          <input type="email" name="email" placeholder="Email" value={alunoData.email} onChange={handleAlunoChange} />
          <input type="text" name="cpf" placeholder="CPF" value={alunoData.cpf} onChange={handleAlunoChange} />
          <button type="submit">Cadastrar Aluno</button>
        </form>
      </div>
      
      <div className="form-section">
        <h2>Cadastrar Treinador</h2>
        <form onSubmit={handleTreinadorSubmit}>
          <input type="text" name="username" placeholder="Nome de Usuário" value={treinadorData.username} onChange={handleTreinadorChange} />
          <input type="email" name="email" placeholder="Email" value={treinadorData.email} onChange={handleTreinadorChange} />
          <input type="text" name="cpf" placeholder="CPF" value={treinadorData.cpf} onChange={handleTreinadorChange} />
          <button type="submit">Cadastrar Treinador</button>
        </form>
      </div>
      
      <div className="form-section">
        <h2>Criar Treino</h2>
        <form onSubmit={handleTreinoSubmit}>
          <input type="date" name="date" placeholder="Data" value={treinoData.date} onChange={handleTreinoChange} />
          <input type="time" name="horario" placeholder="Horário" value={treinoData.horario} onChange={handleTreinoChange} />
          <input type="text" name="nivel" placeholder="Nível" value={treinoData.nivel} onChange={handleTreinoChange} />
          <label>
            Recorrente:
            <input type="checkbox" name="recorrente" checked={treinoData.recorrente} onChange={(e) => setTreinoData({ ...treinoData, recorrente: e.target.checked })} />
          </label>
          <button type="submit">Criar Treino</button>
        </form>
      </div>
    </div>
  );
};

export default Gerente_Painel_CT;
