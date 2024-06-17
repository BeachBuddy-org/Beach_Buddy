// src/screens/TelaIoginScreen/TelaIoginScreen.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Frame } from "../../components/Frame";
import "./style.css";

export const TelaIoginScreen = () => {
  return (
    <div className="tela-iogin-screen">
      <div className="tela-iogin-2">
        <div className="items-9">
          <div className="text-wrapper-16">Sair</div>
        </div>
        <div className="text-wrapper-17">Login</div>
        <div className="overlap-group-2">
          <Link className="items-10" to="/inicial-mesmo">
            <div className="text-wrapper-16">Voltar</div>
          </Link>
        </div>
        <Frame className="frame-instance" to="/tela-inicial-aluno" />
      </div>
    </div>
  );
};
