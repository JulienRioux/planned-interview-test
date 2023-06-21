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

const MARGIN = 24;
const HEIGHT = 24;

// export const TableSkeleton = ({ rows = 6 }) => (
//   <div>
//     <Skeleton height={40} radius="xs" mb={16} />

//     {Array.from(Array(rows).keys()).map((row) => (
//       <Flex gap="20px" key={row}>
//         <Skeleton height={HEIGHT} radius="xs" mt={MARGIN} mb={MARGIN} />
//         <Skeleton height={HEIGHT} radius="xs" mt={MARGIN} mb={MARGIN} />
//         <Skeleton height={HEIGHT} radius="xs" mt={MARGIN} mb={MARGIN} />
//         <Skeleton height={HEIGHT} radius="xs" mt={MARGIN} mb={MARGIN} />
//       </Flex>
//     ))}
//   </div>
// )
