import PropTypes from "prop-types";
import React from "react";
import { Checkbox } from "../Checkbox";
import "./style.css";

export const CheckboxGroup = ({
  numberOfItems,
  className,
  checkboxBasesCheckboxBasesIconWrapperColorClassName,
  checkboxBasesCheckboxBasesIconWrapperColor = "/public/img/color-2.svg",
  checkboxText = "Label",
  checkboxStateDefaultLabelClassName,
  checkboxBasesCheckboxBasesIconWrapperColorClassNameOverride,
  checkboxBasesCheckboxBasesIconWrapperImg = "/public/img/color-2.svg",
  checkboxText1 = "Label",
  checkboxStateDefaultLabelClassNameOverride,
  checkboxHasRadioWrapper,
  checkboxStateHoverLabelClassName,
  checkboxHasDiv,
  checkboxStateHoverLabelClassNameOverride,
  checkboxStateProp = "default",
  checkboxVisible,
  checkboxStateFocusLabelClassName,
  checkboxBasesCheckboxBasesIconWrapperImgClassName,
  checkboxBasesCheckboxBasesIconWrapperColor1 = "/public/img/color-2.svg",
  checkboxText2 = "Label",
  to,
}) => {
  return (
    <div className={`checkbox-group ${className}`}>
      {numberOfItems === "five-items" && (
        <Checkbox
          basesCheckboxBasesIconWrapperColor={checkboxBasesCheckboxBasesIconWrapperColor}
          basesCheckboxBasesIconWrapperColorClassName={checkboxBasesCheckboxBasesIconWrapperColorClassName}
          className={checkboxStateDefaultLabelClassName}
          label
          selected={false}
          stateProp="default"
          text={checkboxText}
          to={to}
        />
      )}

      <Checkbox
        basesCheckboxBasesIconWrapperColor={
          numberOfItems === "five-items"
            ? checkboxBasesCheckboxBasesIconWrapperImg
            : "/public/img/color-2.svg"
        }
        basesCheckboxBasesIconWrapperColorClassName={
          numberOfItems === "five-items"
            ? checkboxBasesCheckboxBasesIconWrapperColorClassNameOverride
            : {
                height: "1px",
                left: "-27px",
                top: "-1002px",
                width: "1px",
              }
        }
        className={
          numberOfItems === "five-items"
            ? checkboxStateDefaultLabelClassNameOverride
            : {
                alignSelf: "stretch",
                flex: "0 0 auto",
                width: "100%",
              }
        }
        label
        selected={false}
        stateProp="default"
        text={numberOfItems === "five-items" ? checkboxText1 : "Label"}
      />
      {numberOfItems === "five-items" && (
        <>
          <Checkbox
            basesCheckboxBasesIconWrapperColor={checkboxBasesCheckboxBasesIconWrapperColor1}
            basesCheckboxBasesIconWrapperColorClassName={checkboxBasesCheckboxBasesIconWrapperImgClassName}
            className={checkboxStateHoverLabelClassName}
            hasRadioWrapper={checkboxHasRadioWrapper}
            label
            selected={false}
            stateProp="default"
            text={checkboxText2}
          />
          <Checkbox
            basesCheckboxBasesIconWrapperColor="/public/img/color-2.svg"
            basesCheckboxBasesIconWrapperColorClassName="item"
            className={checkboxStateHoverLabelClassNameOverride}
            hasRadioWrapper={checkboxHasDiv}
            label
            selected={false}
            stateProp="default"
            text="Label"
          />
          <Checkbox
            basesCheckboxBasesIconWrapperColor="/public/img/color-2.svg"
            basesCheckboxBasesIconWrapperColorClassName="checkbox-instance"
            className={checkboxStateFocusLabelClassName}
            hasRadioWrapper={checkboxVisible}
            label
            selected={false}
            stateProp={checkboxStateProp}
            text="Label"
          />
        </>
      )}

      {["four-items", "three-items", "two-items"].includes(numberOfItems) && (
        <Checkbox
          basesCheckboxBasesIconWrapperColor="/public/img/color-2.svg"
          basesCheckboxBasesIconWrapperColorClassName="item-2"
          className="instance-node"
          label
          selected={false}
          stateProp="default"
          text="Label"
        />
      )}

      {["four-items", "three-items"].includes(numberOfItems) && (
        <Checkbox
          basesCheckboxBasesIconWrapperColor="/public/img/color-2.svg"
          basesCheckboxBasesIconWrapperColorClassName="item-3"
          className="instance-node"
          label
          selected={false}
          stateProp="default"
          text="Label"
        />
      )}

      {numberOfItems === "four-items" && (
        <Checkbox
          basesCheckboxBasesIconWrapperColor="/public/img/color-2.svg"
          basesCheckboxBasesIconWrapperColorClassName="item"
          className="instance-node"
          label
          selected={false}
          stateProp="default"
          text="Label"
        />
      )}
    </div>
  );
};

CheckboxGroup.propTypes = {
  numberOfItems: PropTypes.oneOf(["four-items", "three-items", "two-items", "five-items"]),
  checkboxBasesCheckboxBasesIconWrapperColor: PropTypes.string,
  checkboxText: PropTypes.string,
  checkboxBasesCheckboxBasesIconWrapperImg: PropTypes.string,
  checkboxText1: PropTypes.string,
  checkboxHasRadioWrapper: PropTypes.bool,
  checkboxHasDiv: PropTypes.bool,
  checkboxStateProp: PropTypes.string,
  checkboxVisible: PropTypes.bool,
  checkboxBasesCheckboxBasesIconWrapperColor1: PropTypes.string,
  checkboxText2: PropTypes.string,
  to: PropTypes.string,
};
