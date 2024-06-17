import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BasesIconWrapper = ({
  className,
  colorClassName,
  color = "/public/img/color-34.svg",
}) => {
  return (
    <div className={`bases-icon-wrapper ${className}`}>
      <img className={`color ${colorClassName}`} alt="Color" src={color} />
    </div>
  );
};

BasesIconWrapper.propTypes = {
  color: PropTypes.string,
};
