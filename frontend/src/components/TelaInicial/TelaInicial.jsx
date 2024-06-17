import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { CheckboxGroup } from "../CheckboxGroup";
import "./style.css";

export const TelaInicial = ({
  checkboxGroupCheckboxBasesCheckboxBasesIconWrapperColor,
  checkboxGroupCheckboxBasesCheckboxBasesIconWrapperImg,
}) => {
  return (
    <div className="tela-inicial">
      <div className="headline">
        <div className="text-wrapper">Silvio</div>
      </div>
      <div className="input">
        <div className="div">CTs</div>
        <div className="field">
          <CheckboxGroup
            checkboxBasesCheckboxBasesIconWrapperColor={checkboxGroupCheckboxBasesCheckboxBasesIconWrapperImg}
            checkboxBasesCheckboxBasesIconWrapperColorClassName="design-component-instance-node"
            checkboxBasesCheckboxBasesIconWrapperColorClassNameOverride="checkbox-group-3"
            checkboxBasesCheckboxBasesIconWrapperImg={checkboxGroupCheckboxBasesCheckboxBasesIconWrapperColor}
            checkboxHasDiv={false}
            checkboxHasRadioWrapper={false}
            checkboxStateDefaultLabelClassName="checkbox-group-2"
            checkboxStateDefaultLabelClassNameOverride="checkbox-group-2"
            checkboxStateFocusLabelClassName="checkbox-group-4"
            checkboxStateHoverLabelClassName="checkbox-group-2"
            checkboxStateHoverLabelClassNameOverride="checkbox-group-2"
            checkboxStateProp="disabled"
            checkboxText="Ct Rafa do Volei"
            checkboxText1="Ct do Pelé"
            checkboxVisible={false}
            className="checkbox-group-instance"
            numberOfItems="five-items"
          />
        </div>
      </div>
      <div className="text-wrapper-2">Página do Treinador</div>
      <div className="items">
        <div className="text-wrapper-3">Sair</div>
      </div>
      <Link className="div-wrapper" to="/tela-iogin-2">
        <div className="text-wrapper-3">Sair</div>
      </Link>
      <img className="image" alt="Image" />
      <div className="boton">
        <div className="criar-treino">Criar Treino</div>
      </div>
    </div>
  );
};

TelaInicial.propTypes = {
  checkboxGroupCheckboxBasesCheckboxBasesIconWrapperColor: PropTypes.string,
  checkboxGroupCheckboxBasesCheckboxBasesIconWrapperImg: PropTypes.string,
};
