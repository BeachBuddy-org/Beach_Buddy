import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

export const TelaLoginAluno = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Tentativa de login com os dados:", loginData);  // Log para verificar os dados
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/login", loginData);
      console.log("Resposta da API:", response.data);  // Log para verificar a resposta da API
      if (response.data.success) {
        navigate("/tela-inicial-aluno");
      } else {
        alert("Erro ao fazer login, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login.");
    }
  };

  return (
    <div className="tela-iogin-screen">
      <div className="div-7">
        <div className="items-12">
          <div className="text-wrapper-21">Sair</div>
        </div>
        <div className="overlap-2">
          <Link className="items-13" to="/inicial-mesmo">
            <div className="text-wrapper-21">Voltar</div>
          </Link>
        </div>
        <div className="overlap-group-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              onChange={handleChange}
              className="input-5"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleChange}
              className="input-9"
            />
            <button type="submit" className="entrar-wrapper">
              <div className="entrar">Entrar</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
