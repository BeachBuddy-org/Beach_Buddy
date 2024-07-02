// src/pages/TelaInicialAluno.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./style.css";

export const TelaInicialAluno = () => {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [ctsInscritos, setCtsInscritos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://127.0.0.1:5000/api/userdata/${user}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar dados do usuário");
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data);
          fetch(`http://127.0.0.1:5000/api/cts_inscritos/${user}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Erro ao buscar CTs inscritos");
              }
              return response.json();
            })
            .then((cts) => {
              setCtsInscritos(cts);
            })
            .catch((error) => console.error("Erro ao buscar CTs inscritos:", error));
        })
        .catch((error) => console.error("Erro ao buscar dados do usuário:", error));
    }
  }, [user]);

  const handleCtClick = (ctId) => {
    navigate(`/aluno-painel-treinos/${ctId}`);
  };

  return (
    <div className="tela-inicial-aluno">
      <div className="div-3">
        <div className="headline-2">
          <div className="text-wrapper-6">{user ? user : "Carregando..."}</div>
        </div>
        <div className="input-4">
          <div className="text-wrapper-7">Cts inscritos</div>
          <div className="checkbox-group-wrapper">
            {ctsInscritos.map((ct) => (
              <div key={ct.id} onClick={() => handleCtClick(ct.id)}>
                {ct.name}
              </div>
            ))}
          </div>
        </div>
        <div className="text-wrapper-8">Página do Aluno</div>
        <div className="items-2" onClick={logout}>
          <div className="text-wrapper-9">Sair</div>
        </div>
        <Link className="items-3" to="/tela-login-aluno">
          <div className="text-wrapper-9">Sair</div>
        </Link>
        <img className="img" alt="Image" src="/public/img/image-2.png" />
      </div>
      {userData && (
        <div>
          <p>
            Nome: {userData.firstName} {userData.lastName}
          </p>
          <p>Email: {userData.email}</p>
          <p>CPF: {userData.cpf}</p>
        </div>
      )}
    </div>
  );
};

export default TelaInicialAluno;
