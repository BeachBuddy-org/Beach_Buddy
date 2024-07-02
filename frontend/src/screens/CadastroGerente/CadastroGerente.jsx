import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const CadastroGerente = () => {
  const [gerente, setGerente] = useState({
    username: "",
    email: "",
    cpf: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    ctName: "",
    ctAddress: "",
    cnpj: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGerente({ ...gerente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...gerente, type: "gerente" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          navigate("/tela-login-gerente");
          alert("Gerente cadastrado com sucesso!");
        } else {
          alert("Erro ao cadastrar gerente, tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Erro ao cadastrar gerente:", error);
        alert("Erro ao cadastrar gerente.");
      });
  };

  return (
    <div className="cadastro-unificado">
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
              name="firstName"
              placeholder="Nome"
              onChange={handleChange}
              className="input-7"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Sobrenome"
              onChange={handleChange}
              className="input-5"
            />
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              onChange={handleChange}
              className="input-5"
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              onChange={handleChange}
              className="input-6"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="input-8"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleChange}
              className="input-9"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirma Senha"
              onChange={handleChange}
              className="input-9"
            />
            <input
              type="text"
              name="ctName"
              placeholder="Nome do CT"
              onChange={handleChange}
              className="input-5"
            />
            <input
              type="text"
              name="ctAddress"
              placeholder="Endereço do CT"
              onChange={handleChange}
              className="input-6"
            />
            <input
              type="text"
              name="cnpj"
              placeholder="CNPJ"
              onChange={handleChange}
              className="input-7"
            />
            <button type="submit" className="entrar-wrapper">
              <div className="entrar">Continuar</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
