import * as React from "react";
import { FunctionComponent } from "react";
import { InputComponent, InputWrapper, LeftText } from "./styles";
import { InputProps } from "./types";
import { IconSearch } from "../icons/search";

export const Input: FunctionComponent<InputProps> = ({
  leftText,
  ...props
}) => {
  return (
    <InputWrapper>
      {props.type === "search" && !leftText && (
        <LeftText>
          <IconSearch />
        </LeftText>
      )}
      {leftText && <LeftText>{leftText}</LeftText>}
      <InputComponent
        $hasSearchIcon={props.type === "search"}
        $hasLeftText={!!leftText}
        {...props}
      />
    </InputWrapper>
  );
};
