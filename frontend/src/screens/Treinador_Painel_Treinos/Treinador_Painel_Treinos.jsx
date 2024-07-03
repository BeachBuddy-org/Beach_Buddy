// src/screens/Treinador_Painel_Treinos.jsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import "./style.css";

export const Treinador_Painel_Treinos = () => {
  const { ctId } = useParams();
  const location = useLocation();
  const { user } = useAuth();
  const [treinos, setTreinos] = useState([]);

  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  const userParam = getQueryParams().get("user");

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
          setTreinos(data);
        })
        .catch((error) => console.error("Erro ao buscar treinos:", error));
    }
  }, [ctId, user]);

  return (
    <div className="treinador-painel-treinos">
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
                Alunos Confirmados:{" "}
                {treino.alunos && treino.alunos.length > 0
                  ? treino.alunos.join(", ")
                  : "Nenhum"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Treinador_Painel_Treinos;
