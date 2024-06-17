import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    stateProp: {
      options: ["disabled", "hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "disabled",
    label: true,
    selected: true,
    className: {},
    basesCheckboxBasesIconWrapperColor:
      "/public/img/color-2.svg",
    basesCheckboxBasesIconWrapperColorClassName: {},
    text: "Label",
    hasRadioWrapper: true,
  },
};
