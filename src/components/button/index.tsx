import * as React from "react";
import { FunctionComponent } from "react";
import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

export const Button: FunctionComponent<ButtonProps> = ({ ...props }) => {
  return <ButtonComponent {...props} />;
};
