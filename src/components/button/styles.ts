import styled from "styled-components";
import { token } from "../../theme";

export const ButtonComponent = styled.button<{ $loading?: boolean }>`
  background: ${token("$button-default-bg-color")};
  color: ${token("$button-default-color")};
  border: ${token("$button-default-border")};
  padding: ${token("$button-default-padding")};
  border-radius: ${token("$button-default-border-radius")};
  margin: 0;
  cursor: pointer;
  transition: 0.2s;

  ${(p) => p.$loading && "cursor: progress;"}
`;
