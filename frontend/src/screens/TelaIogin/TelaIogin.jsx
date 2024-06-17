// src/screens/TelaIogin/TelaIogin.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Frame } from "../../components/Frame";
import "./style.css";

export const TelaIogin = () => {
  return (
    <div className="tela-iogin">
      <div className="div-5">
        <div className="items-7">
          <div className="text-wrapper-14">Sair</div>
        </div>
        <div className="text-wrapper-15">Login</div>
        <div className="items-wrapper">
          <Link className="items-8" to="/inicial-mesmo">
            <div className="text-wrapper-14">Voltar</div>
          </Link>
        </div>
        <Frame className="frame-5" to="/tela-inicial-treinador" />
      </div>
    </div>
  );
};
