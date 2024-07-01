import React from "react";
import { Link } from "react-router-dom";
import { CheckboxGroup } from "../../components/CheckboxGroup";
import "./style.css";

export const TelaInicialTreinador = () => {
  return (
    <div className="tela-inicial-treinador">
      <div className="div-3">
        <div className="headline-2">
          <div className="text-wrapper-6">Bem-vindo, Treinador</div>
        </div>
        <div className="input-4">
          <div className="text-wrapper-7">CTs Associados</div>
          <div className="checkbox-group-wrapper">
            <CheckboxGroup
              checkboxBasesCheckboxBasesIconWrapperColor="/public/img/color@2x.png"
              checkboxBasesCheckboxBasesIconWrapperColor1="/public/img/color@2x.png"
              checkboxBasesCheckboxBasesIconWrapperColorClassName="checkbox-group-7"
              checkboxBasesCheckboxBasesIconWrapperColorClassNameOverride="checkbox-group-9"
              checkboxBasesCheckboxBasesIconWrapperImg="/public/img/color@2x.png"
              checkboxBasesCheckboxBasesIconWrapperImgClassName="checkbox-group-5"
              checkboxHasDiv={false}
              checkboxStateDefaultLabelClassName="checkbox-group-8"
              checkboxStateDefaultLabelClassNameOverride="checkbox-group-8"
              checkboxStateFocusLabelClassName="checkbox-group-8"
              checkboxStateHoverLabelClassName="checkbox-group-8"
              checkboxStateHoverLabelClassNameOverride="checkbox-group-8"
              checkboxStateProp="disabled"
              checkboxText="CT Rafa do Volei"
              checkboxText1="CT do Pelé"
              checkboxText2="Futvolei Rio"
              checkboxVisible={false}
              className="checkbox-group-6"
              numberOfItems="five-items"
              to="/tela-pos-selecao"
            />
          </div>
        </div>
        <div className="text-wrapper-8">Página do Treinador</div>
        <div className="items-2">
          <div className="text-wrapper-9">Sair</div>
        </div>
        <Link className="items-3" to="/tela-login-treinador">
          <div className="text-wrapper-9">Sair</div>
        </Link>
        <img
          className="img"
          alt="Image"
          src="/public/img/image-2.png"
        />
      </div>
    </div>
  );
};
