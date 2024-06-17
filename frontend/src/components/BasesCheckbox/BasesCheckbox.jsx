import PropTypes from "prop-types";
import React from "react";
import { BasesIconWrapper } from "../BasesIconWrapper";
import "./style.css";

export const BasesCheckbox = ({
  enabled,
  thumbClassName,
  basesIconWrapperColorClassName,
  basesIconWrapperColor = "/public/img/color-17.svg",
}) => {
  return (
    <div className="bases-checkbox">
      <div className={`thumb enabled-${enabled} ${thumbClassName}`}>
        <BasesIconWrapper
          className={`${enabled ? "class" : "class-2"}`}
          color={basesIconWrapperColor}
          colorClassName={basesIconWrapperColorClassName}
        />
      </div>
    </div>
  );
};

BasesCheckbox.propTypes = {
  enabled: PropTypes.bool,
  basesIconWrapperColor: PropTypes.string,
};
