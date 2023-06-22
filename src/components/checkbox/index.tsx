import * as React from "react";
import { FunctionComponent } from "react";
import { CheckboxInput } from "./styles";
import { CheckboxProps } from "./types";

/** Simple Checkbox component that works exactly as a regular checkbox input component. */
const Checkbox: FunctionComponent<CheckboxProps> = ({ ...props }) => {
  return <CheckboxInput {...props} type="checkbox" />;
};

export default Checkbox;
