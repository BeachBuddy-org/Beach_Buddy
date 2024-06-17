import React from "react";
import { Link } from "react-router-dom";
import { Frame } from "../../components/Frame";
import "./style.css";

export const Cadastro = () => {
  return (
    <div className="cadastro">
      <div className="div-7">
        <div className="items-12">
          <div className="text-wrapper-21">Sair</div>
        </div>
        <div className="overlap-2">
          <Link className="items-13" to="/inicial-mesmo">
            <div className="text-wrapper-21">Voltar</div>
          </Link>
        </div>
        <div className="overlap-group-4">
          <Frame
            className="frame-3"
            hasBoton={false}
            hasEsqueceuSuaSenha={false}
            hasInput={false}
            inputClassName="frame-5-instance"
            text="Sobrenome"
          />
          <Link className="entrar-wrapper" to="/cadastro-u352">
            <div className="entrar">Continuar</div>
          </Link>
          <div className="input-5">
            <div className="frame-4" />
            <div className="text-wrapper-22">Usuario</div>
          </div>
          <div className="input-6">
            <div className="frame-4" />
            <div className="text-wrapper-22">Cpf</div>
          </div>
          <div className="input-7">
            <div className="frame-4" />
            <div className="nome">Nome</div>
          </div>
        </div>
      </div>
    </div>
  );
};
