import * as React from "react";

import { ReactNode } from "react";
import { SortButton, TableWrapper } from "./styles";
import IconSortArrows from "../icons/sort-arrows";
import { ITableRow } from "./types";

export const Table = ({
  columns,
  rows,
}: {
  columns: ITableRow[];
  rows: ReactNode;
}) => {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {columns.map(({ content, key, sorter }) => (
              <th key={key}>
                <span>{content}</span>
                {sorter && (
                  <SortButton onClick={sorter}>
                    <IconSortArrows />
                  </SortButton>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </TableWrapper>
  );
};
