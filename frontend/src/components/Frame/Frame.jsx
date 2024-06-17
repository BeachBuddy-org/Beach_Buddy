import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Frame = ({
  className,
  hasBoton = true,
  hasInput = true,
  inputClassName,
  text = "Usuário",
  hasEsqueceuSuaSenha = true,
  to = "/tela-inicial-aluno",
}) => {
  return (
    <div className={`frame ${className}`}>
      {hasBoton && (
        <Link className="boton-2" to={to}>
          <div className="text-wrapper-4">Entrar</div>
        </Link>
      )}

      {hasInput && (
        <div className="input-2">
          <div className="div-2" />
          <div className="text-wrapper-5">Senha</div>
        </div>
      )}

      <div className={`input-3 ${inputClassName}`}>
        <div className="div-2" />
        <div className="usu-rio">{text}</div>
      </div>
      {hasEsqueceuSuaSenha && <div className="esqueceu-sua-senha">Esqueceu Sua Senha?</div>}
    </div>
  );
};

Frame.propTypes = {
  hasBoton: PropTypes.bool,
  hasInput: PropTypes.bool,
  text: PropTypes.string,
  hasEsqueceuSuaSenha: PropTypes.bool,
  to: PropTypes.string,
};
