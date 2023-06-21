import styled from "styled-components";
import { token } from "../../theme";

export const UsersPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;

  @media (max-width: ${token("$media-query-large")}) {
    grid-template-columns: 1fr;
  }
`;
