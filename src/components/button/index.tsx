import * as React from "react";
import { FunctionComponent } from "react";
import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

/** Button with loading props. */
export const Button: FunctionComponent<ButtonProps> = ({
  loading,
  children,
  ...props
}) => {
  return (
    <ButtonComponent $loading={loading} {...props}>
      {loading ? "Loading..." : children}
    </ButtonComponent>
  );
};
