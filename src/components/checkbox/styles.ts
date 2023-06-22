import styled from "styled-components";
import { token } from "../../theme";

export const CheckboxInput = styled.input`
  border: ${token("$input-border")};
  border-radius: ${token("$checkbox-border-radius")};
  height: ${token("$checkbox-size")};
  width: ${token("$checkbox-size")};
  accent-color: ${token("$checkbox-accent-color")};

  cursor: pointer;
  margin: 0;
`;
