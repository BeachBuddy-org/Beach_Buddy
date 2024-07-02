// src/screens/Aluno_Painel_Treinos.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import "./style.css";

export const Aluno_Painel_Treinos = () => {
  const { ctId } = useParams();
  const { user } = useAuth();
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    const fetchTreinos = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/treinos/${ctId}`);
        setTreinos(response.data);
      } catch (error) {
        console.error("Erro ao buscar treinos:", error);
      }
    };

    fetchTreinos();
  }, [ctId]);

  const handleConfirmarPresenca = async (treinoId) => {
    try {
      await axios.post(`http://127.0.0.1:5000/api/confirmar_presenca`, {
        treino_id: treinoId,
        username: user
      });
      alert("Presença confirmada com sucesso!");
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
          <li key={treino.id}>
            {treino.name} - {treino.date}
            <button onClick={() => handleConfirmarPresenca(treino.id)}>
              Confirmar Presença
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aluno_Painel_Treinos;
