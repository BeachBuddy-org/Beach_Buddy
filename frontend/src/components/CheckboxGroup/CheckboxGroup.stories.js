import { CheckboxGroup } from ".";

export default {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  argTypes: {
    numberOfItems: {
      options: ["four-items", "three-items", "two-items", "five-items"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    numberOfItems: "four-items",
    className: {},
    checkboxBasesCheckboxBasesIconWrapperColorClassName: {},
    checkboxBasesCheckboxBasesIconWrapperColor:
      "/public/img/color-2.svg",
    checkboxText: "Label",
    checkboxStateDefaultLabelClassName: {},
    checkboxBasesCheckboxBasesIconWrapperColorClassNameOverride: {},
    checkboxBasesCheckboxBasesIconWrapperImg:
      "/public/img/color-2.svg",
    checkboxText1: "Label",
    checkboxStateDefaultLabelClassNameOverride: {},
    checkboxHasRadioWrapper: true,
    checkboxStateHoverLabelClassName: {},
    checkboxHasDiv: true,
    checkboxStateHoverLabelClassNameOverride: {},
    checkboxStateProp: "default",
    checkboxVisible: true,
    checkboxStateFocusLabelClassName: {},
    checkboxBasesCheckboxBasesIconWrapperImgClassName: {},
    checkboxBasesCheckboxBasesIconWrapperColor1:
      "/public/img/color-2.svg",
    checkboxText2: "Label",
  },
};
