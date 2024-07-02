import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./style.css";

export const TelaInicialGerente = () => {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [cts, setCts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect chamado com user:", user); // Log para verificar o estado do user
    if (user) {
      console.log("Fetching data for user:", user); // Adicionar log
      fetch(`http://127.0.0.1:5000/api/userdata/${user}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar dados do usuário");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Dados recebidos:", data); // Adicionar log
          setUserData(data);
        })
        .catch((error) =>
          console.error("Erro ao buscar dados do usuário:", error)
        );

      // Fetch CTs gerenciados
      fetch(`http://127.0.0.1:5000/api/cts/${user}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar CTs do gerente");
          }
          return response.json();
        })
        .then((data) => {
          console.log("CTs recebidos:", data); // Adicionar log
          setCts(data);
        })
        .catch((error) =>
          console.error("Erro ao buscar CTs do gerente:", error)
        );
    }
  }, [user]);

  const handleCtClick = (ctId) => {
    navigate(`/gerente-painel-ct/${ctId}`);
  };

  return (
    <div className="tela-inicial-gerente">
      <div className="div-3">
        <div className="headline-2">
          <div className="text-wrapper-6">{user ? user : "Carregando..."}</div>
        </div>
        <div className="input-4">
          <div className="text-wrapper-7">CTs Gerenciados</div>
          <div className="checkbox-group-wrapper">
            {cts.map((ct) => (
              <button key={ct.id} onClick={() => handleCtClick(ct.id)} className="ct-button">
                {ct.name}
              </button>
            ))}
          </div>
        </div>
        <div className="text-wrapper-8">Página do Gerente</div>
        <div className="items-2" onClick={logout}>
          <div className="text-wrapper-9">Sair</div>
        </div>
        <Link className="items-3" to="/tela-login">
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

export default TelaInicialGerente;
