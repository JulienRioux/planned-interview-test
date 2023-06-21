import * as React from "react";
import Card from "../card";
import { Input } from "../input";
import { useCallback } from "react";
import { Button } from "../button";
import { RetrieveUserForm } from "./styles";
import { useUsers } from "../../hooks/use-users";

const RetrieveUsers = () => {
  const { isLoading, getUsers } = useUsers();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      getUsers();
    },
    [getUsers]
  );

  return (
    <Card>
      <RetrieveUserForm onSubmit={handleSubmit}>
        <Input
          name="minAge"
          value="0"
          type="number"
          onChange={() => null}
          leftText="Min"
        />
        <Input
          name="maxAge"
          value="100"
          type="number"
          onChange={() => null}
          leftText="Max"
        />
        <div>
          <Button type="submit">Retrieve Users</Button>
        </div>
      </RetrieveUserForm>
    </Card>
  );
};

export default RetrieveUsers;
