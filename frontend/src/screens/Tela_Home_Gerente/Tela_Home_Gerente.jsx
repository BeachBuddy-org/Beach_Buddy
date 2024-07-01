import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Tela_Home_Gerente = () => {
  return (
    <div className="inicial-mesmo">
      <div className="div-6">
        <div className="overlap">
          <div className="frame-wrapper">
            <div className="frame-2" />
          </div>
          <img className="image-3" alt="Image" src="/img/image-4.png" />
        </div>
        <div className="items-11">
          <div className="text-wrapper-18">Sair</div>
        </div>
        <div className="overlap-group-3">
          <Link className="aluno-wrapper" to="/tela-login-gerente">
            <div className="aluno">Login</div>
          </Link>
          <div className="text-wrapper-19">Ja possui um CT?</div>
        </div>
        <Link className="boton-3" to="/cadastro-gerente">
          <div className="text-wrapper-20">Crie seu CT</div>
        </Link>
      </div>
    </div>
  );
};
