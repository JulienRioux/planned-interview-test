import styled from "styled-components";
import { ColorToken, token } from "../../theme";

export const TableWrapper = styled.div`
  font-size: ${token("$table-font-size")};
  text-align: ${token("$table-text-align")};

  table {
    width: 100%;
    border-collapse: collapse;
  }

  tr {
    display: grid;
    grid-template-columns: 40px 1fr 1fr;
    border-bottom: ${token("$table-border")};

    &:last-of-type {
      border: none;
    }
  }

  th,
  td {
    padding: 12px 0;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  thead {
    font-weight: ${token("$table.thead-font-weight")};
  }
`;

export const SortButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 4px;
  cursor: pointer;
  display: flex;
  transition: 0.2s;

  :hover {
    background: ${ColorToken.Black100};
    border-radius: 2px;
  }
`;
