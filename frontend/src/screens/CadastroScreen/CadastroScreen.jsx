import React from "react";
import { Link } from "react-router-dom";
import { Frame } from "../../components/Frame";
import "./style.css";

export const CadastroScreen = () => {
  return (
    <div className="cadastro-screen">
      <div className="cadastro-2">
        <div className="items-14">
          <div className="text-wrapper-23">Sair</div>
        </div>
        <div className="overlap-group-5">
          <Link className="items-15" to="/cadastro-u351">
            <div className="text-wrapper-23">Voltar</div>
          </Link>
        </div>
        <div className="overlap-3">
          <Frame
            className="frame-6"
            hasBoton={false}
            hasEsqueceuSuaSenha={false}
            hasInput={false}
            inputClassName="frame-7"
            text="Senha"
          />
          <Link className="boton-4" to="/tela-iogin-1">
            <div className="entrar-2">Continuar</div>
          </Link>
          <div className="input-8">
            <div className="frame-8" />
            <div className="confirma-senha">Confirma Senha</div>
          </div>
          <div className="input-9">
            <div className="frame-8" />
            <div className="text-wrapper-24">Email</div>
          </div>
        </div>
      </div>
    </div>
  );
};
