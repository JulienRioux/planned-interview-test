import * as React from "react";
import { FunctionComponent } from "react";
import { CardWrapper } from "./styles";
import { CardProps } from "./types";

/** Card component */
const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
