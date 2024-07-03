// src/pages/TelaInicialTreinador.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./style.css";

export const TelaInicialTreinador = () => {
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
          return fetch(`http://127.0.0.1:5000/api/treinador_cts/${user}`);
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar CTs do treinador");
          }
          console.log(response);
          return response.json();
        })
        .then((ctsData) => {
          setCts(ctsData);
        })
        .catch((error) =>
          console.error("Erro ao buscar dados do treinador e CTs:", error)
        );
    }
  }, [user]);

  return (
    <div className="tela-inicial-treinador">
      <div className="header">
        <div className="headline-2">
          <div className="text-wrapper-6">{user ? user : "Carregando..."}</div>
        </div>
        <div className="logout">
          <Link className="items-3" onClick={logout} to="/tela-login-treinador">
            <div className="text-wrapper-9">Sair</div>
          </Link>
        </div>
      </div>
      <img className="img" alt="Image" src="/public/img/image-2.png" />
      <div className="input-4">
        <div className="text-wrapper-7">CTs Associados</div>
        <div className="checkbox-group-wrapper">
          {cts.map((ct) => (
            <Link
              key={ct.id}
              to={`/treinador-painel-treinos/${ct.id}?user=${user}`}
              className="ct-link"
            >
              <div className="ct-item">{ct.name}</div>
            </Link>
          ))}
        </div>
      </div>
      {userData && (
        <div className="user-info">
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

export default TelaInicialTreinador;
