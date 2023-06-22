import styled from "styled-components";
import { token } from "../../theme";
import { SEARCH_ICON_SIZE } from ".";

const LEFT_TEXT_PADDING = 8;
const LEFT_TEXT_WIDTH = 36;

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

  // SEARCH_ICON_SIZE + LEFT_TEXT_PADDING * 2 (padding-left & padding-right)
  ${(p) =>
    p.$hasSearchIcon &&
    `padding-left: ${SEARCH_ICON_SIZE + LEFT_TEXT_PADDING * 2}px;`}

  // LEFT_TEXT_WIDTH + LEFT_TEXT_PADDING * 2 (padding-left & padding-right)
  ${(p) =>
    p.$hasLeftText &&
    `padding-left: ${LEFT_TEXT_WIDTH + LEFT_TEXT_PADDING * 2}px`}
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const LeftText = styled.div`
  font-size: ${token("$input-font-size")};
  color: ${token("$input-placeholder-color")};

  padding: ${LEFT_TEXT_PADDING}px;
  width: ${LEFT_TEXT_WIDTH}px;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  jusitify-content: center;
  pointer-events: none;
`;
