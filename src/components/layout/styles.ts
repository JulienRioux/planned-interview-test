import styled from "styled-components";
import { token } from "../../theme";

export const LayoutWrapper = styled.div``;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 8px;

  @media (max-width: ${token("$media-query-large")}) {
    width: auto;
    margin: 8px 0;
  }
`;
