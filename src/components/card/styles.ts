import styled from "styled-components";
import { token } from "../../theme";

export const CardWrapper = styled.div`
  background: ${token("$card-bg-color")};
  border-radius: ${token("$card-border-radius")};
  border: ${token("$card-border")};
  box-shadow: ${token("$card-box-shadow")};
`;
