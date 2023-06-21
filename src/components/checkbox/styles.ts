import styled from "styled-components";
import { token } from "../../theme";

export const CheckboxInput = styled.input`
  border: ${token("$input-border")};
  cursor: pointer;
  border-radius: 4px;
  margin: 0;
  height: 14px;
  width: 14px;
  accent-color: #000;
`;
