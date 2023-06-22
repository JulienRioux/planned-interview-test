import styled from "styled-components";
import { token } from "../../theme";

export const InputComponent = styled.input<{
  $hasSearchIcon?: boolean;
  $hasLeftText?: boolean;
}>`
  border: ${token("$input-border")};
  background: ${token("$input-background")};
  border-radius: ${token("$input-border-radius")};
  padding: ${token("$input-padding")};
  font-size: ${token("$input-font-size")};

  width: -webkit-fill-available;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: ${token("$input:focus-border-color")};
  }

  &::placeholder {
    color: ${token("$input-placeholder-color")};
  }

  // TODO: Make this a variable
  // 16 (icon width) + 8 (padding-left) + 8 (padding-right)
  ${(p) => p.$hasSearchIcon && "padding-left: 32px;"}

  // 36 (icon width) + 8 (padding-left) + 8 (padding-right)
  ${(p) => p.$hasLeftText && "padding-left: 52px;"}
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const LeftText = styled.div`
  font-size: ${token("$input-font-size")};
  color: ${token("$input-placeholder-color")};

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  jusitify-content: center;
  padding: 8px;
  width: 36px;
  pointer-events: none;
`;
