import styled from "styled-components";
import { ColorToken } from "../../theme";

export const TopNavWrapper = styled.div`
  border-bottom: 1px solid ${ColorToken.Black200};
  background: ${ColorToken.White};
  display: flex;
  align-items: center;
  gap: 20px;
  position: sticky;
  top: 0;
  z-index: 9;
`;

export const Img = styled.img`
  height: 60px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`;
