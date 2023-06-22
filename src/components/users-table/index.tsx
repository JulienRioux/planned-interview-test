import * as React from "react";

import { Table } from "../table";
import Checkbox from "../checkbox";
import { useUsers } from "../../hooks/use-users";
import styled from "styled-components";

const NoDataText = styled.div`
  font-size: 14px;
  color: #8c9aad;
`;

const TABLE_COLUMNS = [
  {
    content: "",
    key: "checkbox",
  },
  {
    content: "Name",
    key: "name",
    sorter: () => console.log("Sorting by names..."),
  },
  {
    content: "Age",
    key: "age",
    sorter: () => console.log("Sorting by ages..."),
  },
];

export const UsersTable = () => {
  const { isLoading, users } = useUsers();

  return users.length ? (
    <Table
      columns={TABLE_COLUMNS}
      rows={users.map(({ name, age, uid }, index: number) => (
        <tr key={uid}>
          <td>
            <Checkbox />
          </td>
          <td>{name}</td>
          <td>{age}</td>
        </tr>
      ))}
    />
  ) : (
    <NoDataText>{isLoading ? "Loading data..." : "No data..."}</NoDataText>
  );
};
