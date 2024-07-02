// src/pages/TelaInicialAluno.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./style.css";

export const TelaInicialAluno = () => {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [cts, setCts] = useState([]);

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
          return fetch(`http://127.0.0.1:5000/api/aluno_cts/${user}`);
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar CTs do aluno");
          }
          return response.json();
        })
        .then((ctsData) => {
          setCts(ctsData);
        })
        .catch((error) => console.error("Erro ao buscar dados do aluno e CTs:", error));
    }
  }, [user]);

  return (
    <div className="tela-inicial-aluno">
      <div className="div-3">
        <div className="headline-2">
          <div className="text-wrapper-6">{user ? user : "Carregando..."}</div>
        </div>
        <div className="input-4">
          <div className="text-wrapper-7">Cts inscritos</div>
          <div className="checkbox-group-wrapper">
            {cts.map((ct) => (
              <Link key={ct.id} to={`/aluno-painel-treinos/${ct.id}`} className="ct-link">
                <div className="ct-item">{ct.name}</div>
              </Link>
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
          {/* Renderizar dados do usuário */}
          <p>
            Nome: {userData.firstName} {userData.lastName}
          </p>
          <p>Email: {userData.email}</p>
          <p>CPF: {userData.cpf}</p>
          {/* Outros dados do usuário */}
        </div>
      )}
    </div>
  );
};

export default TelaInicialAluno;
