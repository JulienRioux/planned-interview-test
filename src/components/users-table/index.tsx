import * as React from "react";

import { Table } from "../table";
import Checkbox from "../checkbox";
import { useUsers } from "../../hooks/use-users";
import styled from "styled-components";

const NoDataText = styled.div`
  font-size: 14px;
  color: #8c9aad;
`;

export const UsersTable = () => {
  const { isLoading, users } = useUsers();

  return users.length ? (
    <Table
      columns={["", "Name", "Age"]}
      rows={users.map(({ name, age, uid }: any, index: number) => (
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
