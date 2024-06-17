import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const TelaPsSeleo = () => {
  return (
    <div className="tela-ps-seleo">
      <div className="div-4">
        <div className="headline-3">
          <div className="text-wrapper-10">Jane</div>
        </div>
        <div className="text-wrapper-11">Página do Aluno</div>
        <div className="items-4">
          <div className="text-wrapper-12">Sair</div>
        </div>
        <Link className="items-5" to="/tela-iogin-2">
          <div className="text-wrapper-12">Sair</div>
        </Link>
        <Link className="items-6" to="/tela-inicial-aluno">
          <div className="text-wrapper-12">Voltar</div>
        </Link>
        <div className="TREINOS">
          <div className="treino">
            <div className="text-wrapper-13">05/06/2024 - Intermediario manhã</div>
            <p className="local-quadra">
              Local: Quadra 1<br />
              Horario: 6 as 7:30
              <br />
              Treinador: Silvio
            </p>
          </div>
          <div className="treino-2">
            <div className="text-wrapper-13">07/06/2024 - Intermediario manhã</div>
            <p className="local-quadra">
              Local: Quadra 1<br />
              Horario: 6 as 7:30
              <br />
              Treinador: Silvio
            </p>
          </div>
          <div className="treino-3">
            <div className="text-wrapper-13">10/06/2024 - Intermediario manhã</div>
            <p className="local-quadra">
              Local: Quadra 1<br />
              Horario: 6 as 7:30
              <br />
              Treinador: Silvio
            </p>
          </div>
          <div className="overlap-group">
            <div className="treino-4">
              <div className="text-wrapper-13">12/06/2024 - Intermediario manhã</div>
              <p className="local-quadra">
                Local: Quadra 1<br />
                Horario: 6 as 7:30
                <br />
                Treinador: Silvio
              </p>
            </div>
            <div className="treino-5">
              <div className="text-wrapper-13">05/06/2024 - Intermediario manhã</div>
              <p className="local-quadra">
                Local: Quadra 1<br />
                Horario: 6 as 7:30
                <br />
                Treinador: Silvio
              </p>
            </div>
          </div>
        </div>
        <img
          className="image-2"
          alt="Image"
          src="/public/img/image-2.png"
        />
      </div>
    </div>
  );
};
