import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { BasesCheckbox } from "../BasesCheckbox";
import "./style.css";

export const Checkbox = ({
  stateProp,
  label,
  selected,
  className,
  basesCheckboxBasesIconWrapperColor = "/public/img/color-2.svg",
  basesCheckboxBasesIconWrapperColorClassName,
  text = "Label",
  hasRadioWrapper = true,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    label: label || true,
    selected: selected || false,
  });

  return (
    <Link
      className={`checkbox label-${state.label} ${className}`}
      to={to}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {hasRadioWrapper && (
        <div className={`radio-wrapper ${state.state}`}>
          <BasesCheckbox
            basesIconWrapperColor={basesCheckboxBasesIconWrapperColor}
            basesIconWrapperColorClassName={basesCheckboxBasesIconWrapperColorClassName}
            enabled={state.selected ? true : undefined}
            thumbClassName={`${!state.selected && ["default", "disabled"].includes(state.state) && "class-3"} ${
              state.selected && ["default", "disabled"].includes(state.state) && "class-4"
            }`}
          />
          {state.label && <div className="label">{text}</div>}
        </div>
      )}
    </Link>
  );
};

function reducer(state, action) {
  if (state.label === true && state.selected === false && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          label: true,
          selected: false,
          state: "hover",
        };
    }
  }

  if (state.label === true && state.selected === false && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          label: true,
          selected: false,
          state: "default",
        };
    }
  }

  if (state.label === true && state.selected === false && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          label: true,
          selected: true,
          state: "default",
        };
    }
  }

  if (state.label === true && state.selected === true && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          label: true,
          selected: true,
          state: "hover",
        };
    }
  }

  if (state.label === true && state.selected === true && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          label: true,
          selected: true,
          state: "default",
        };
    }
  }

  if (state.label === true && state.selected === true && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          label: true,
          selected: false,
          state: "default",
        };
    }
  }

  if (state.label === false && state.selected === false && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          label: false,
          selected: false,
          state: "hover",
        };
    }
  }

  if (state.label === false && state.selected === false && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          label: false,
          selected: false,
          state: "default",
        };
    }
  }

  if (state.label === false && state.selected === false && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          label: false,
          selected: true,
          state: "default",
        };
    }
  }

  if (state.label === false && state.selected === true && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          label: false,
          selected: true,
          state: "hover",
        };
    }
  }

  if (state.label === false && state.selected === true && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          label: false,
          selected: true,
          state: "default",
        };
    }
  }

  if (state.label === false && state.selected === true && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          label: false,
          selected: false,
          state: "default",
        };
    }
  }

  return state;
}

Checkbox.propTypes = {
  stateProp: PropTypes.oneOf(["disabled", "hover", "focus", "default"]),
  label: PropTypes.bool,
  selected: PropTypes.bool,
  basesCheckboxBasesIconWrapperColor: PropTypes.string,
  text: PropTypes.string,
  hasRadioWrapper: PropTypes.bool,
  to: PropTypes.string,
};
