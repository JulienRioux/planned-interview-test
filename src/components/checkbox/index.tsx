import * as React from "react";
import { FunctionComponent } from "react";
import { CheckboxInput } from "./styles";
import { CheckboxProps } from "./types";

const Checkbox: FunctionComponent<CheckboxProps> = ({ ...props }) => {
  return <CheckboxInput {...props} type="checkbox" />;
};

export default Checkbox;
