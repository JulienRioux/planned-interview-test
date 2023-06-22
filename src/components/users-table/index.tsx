import * as React from "react";

import { Table } from "../table";
import Checkbox from "../checkbox";
import { useUsers } from "../../hooks/use-users";
import { NoDataText } from "./styles";

const TABLE_COLUMNS = [
  {
    content: "",
    key: "checkbox",
  },
  {
    content: "Name",
    key: "name",
    // Only console.log for the moment.
    sorter: () => console.log("Sorting by names..."),
  },
  {
    content: "Age",
    key: "age",
    // Only console.log for the moment.
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
