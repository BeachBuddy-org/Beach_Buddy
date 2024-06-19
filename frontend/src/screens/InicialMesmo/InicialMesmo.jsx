import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const InicialMesmo = () => {
  return (
    <div className="inicial-mesmo">
      <div className="div-6">
        <div className="overlap">
          <div className="frame-wrapper">
            <div className="frame-2" />
          </div>
          <img
            className="image-3"
            alt="Image"
            src="/img/image-4.png"
          />
        </div>
        <div className="items-11">
          <div className="text-wrapper-18">Sair</div>
        </div>
        <div className="overlap-group-3">
          <Link className="sign-up-wrapper" to="/cadastro-u351">
            <div className="sign-up">Sign Up</div>
          </Link>
          <div className="text-wrapper-19">Bem-vindo ao BeachBuddy</div>
        </div>
        <Link className="boton-3" to="/tela-iogin-2">
          <div className="text-wrapper-20">Login</div>
        </Link>
        <Link className="criar-ct-wrapper" to="/tela-iogin-2">
          <div className="criar-ct">Criar Ct</div>
        </Link>
        <p className="IHC-by-bruno-wolf">Ihc By Bruno Wolf Povoa</p>
      </div>
    </div>
  );
};
