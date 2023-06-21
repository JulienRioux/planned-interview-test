import * as React from "react";

import { ReactNode } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  font-size: 14px;
  text-align: left;

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
  }

  tr {
    display: grid;
    grid-template-columns: 40px 1fr 1fr;
    border-bottom: 1px solid #0001;

    &:last-of-type {
      border: none;
    }
  }

  th,
  td {
    padding: 12px 0;
  }

  thead {
    font-weight: bold;
  }
`;

export const Table = ({
  columns,
  rows,
}: {
  columns: string[];
  rows: ReactNode;
}) => {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {columns.map((column: string) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </TableWrapper>
  );
};
