import * as React from "react";
import { FunctionComponent } from "react";
import { AlertComponent } from "./styles";
import { AlertProps } from "./types";

/** Alert component to show error to the users. */
const Alert: FunctionComponent<AlertProps> = ({ children }) => {
  return <AlertComponent>{children}</AlertComponent>;
};

export default Alert;
