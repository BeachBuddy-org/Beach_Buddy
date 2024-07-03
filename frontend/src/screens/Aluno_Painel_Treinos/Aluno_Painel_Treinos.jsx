// src/screens/Aluno_Painel_Treinos.jsx

import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import "./style.css";

export const Aluno_Painel_Treinos = () => {
  const { ctId } = useParams();
  const location = useLocation();
  // const { user } = useAuth();
  const [treinos, setTreinos] = useState([]);

  // Função para obter os parâmetros de consulta
  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  // Obter o valor do parâmetro de consulta 'user'
  const user = getQueryParams().get("user");

  useEffect(() => {
    if (ctId) {
      fetch(`http://127.0.0.1:5000/api/treinos/${ctId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar treinos");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Treinos ", data);
          setTreinos(data);
        })
        .catch((error) => console.error("Erro ao buscar treinos:", error));
    }
  }, [ctId, user]);

  const handleConfirmarPresenca = async (treinoId) => {
    try {
      await axios.post(`http://127.0.0.1:5000/api/confirmar_presenca`, {
        treino_id: treinoId,
        username: user,
      });
      alert("Presença confirmada com sucesso!");

      // Atualiza a lista de treinos após confirmar a presença
      setTreinos((prevTreinos) =>
        prevTreinos.map((treino) =>
          treino.id === treinoId
            ? { ...treino, alunos: [...treino.alunos, user.username] }
            : treino
        )
      );
    } catch (error) {
      console.error("Erro ao confirmar presença:", error);
      alert("Erro ao confirmar presença.");
    }
  };

  return (
    <div className="aluno-painel-treinos">
      <h1>Treinos Disponíveis</h1>
      <ul>
        {treinos.map((treino) => (
          <li key={treino.id} className="treino-item">
            <div className="treino-info">
              <h2>{treino.name}</h2>
              <p>Data: {treino.date}</p>
              <p>Horário: {treino.horario}</p>
              <p>Nível: {treino.nivel}</p>
              <p>
                Confirmados:{" "}
                {treino.alunos && treino.alunos.length > 0
                  ? treino.alunos.join(", ")
                  : "Nenhum"}
              </p>
            </div>
            <button
              className="confirmar-presenca-btn"
              onClick={() => handleConfirmarPresenca(treino.id)}
            >
              Confirmar Presença
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aluno_Painel_Treinos;
