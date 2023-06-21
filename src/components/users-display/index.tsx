import * as React from "react";
import Card from "../card";
import { Input } from "../input";
import { Hr } from "../hr";
import { Table } from "../table";
import Checkbox from "../checkbox";
import { useUsers } from "../../hooks/use-users";

export const UsersDisplay = () => {
  const { isLoading, users } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!users.length) {
    return null;
  }

  return (
    <Card>
      <Input
        placeholder="Search users"
        name="search"
        value=""
        type="search"
        onChange={() => null}
      />

      <Hr />

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
    </Card>
  );
};
