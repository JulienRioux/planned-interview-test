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
        <LeftText data-testid="input-search-icon">
          <IconSearch />
        </LeftText>
      )}
      {leftText && (
        <LeftText data-testid="input-left-text">{leftText}</LeftText>
      )}
      <InputComponent
        $hasSearchIcon={props.type === "search"}
        $hasLeftText={!!leftText}
        data-testid="input-component"
        {...props}
      />
    </InputWrapper>
  );
};
