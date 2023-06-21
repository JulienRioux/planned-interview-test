import * as React from "react";
import Card from "../card";
import { Input } from "../input";
import { Hr } from "../hr";
import { Table } from "../table";
import Checkbox from "../checkbox";
import { useUsers } from "../../hooks/use-users";
import styled from "styled-components";

const NoDataText = styled.div`
  font-size: 14px;
  color: #8c9aad;
`;

export const UsersDisplay = () => {
  const { isLoading, users, handleFiltersChange, searchText } = useUsers();

  return (
    <Card>
      <Input
        placeholder="Search users"
        name="searchText"
        value={searchText}
        type="search"
        onChange={handleFiltersChange}
      />

      <Hr />

      {users.length ? (
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
      )}
    </Card>
  );
};
