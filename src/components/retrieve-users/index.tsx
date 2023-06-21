import * as React from "react";
import Card from "../card";
import { Input } from "../input";
import { useCallback } from "react";
import { Button } from "../button";
import { RetrieveUserForm } from "./styles";
import { useUsers } from "../../hooks/use-users";

const RetrieveUsers = () => {
  const { isLoading, getUsers, handleMinMaxAgeChange, minAge, maxAge } =
    useUsers();

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
          value={minAge}
          type="number"
          onChange={handleMinMaxAgeChange}
          leftText="Min"
          min={0}
          max={maxAge}
          required
        />
        <Input
          name="maxAge"
          value={maxAge}
          type="number"
          onChange={handleMinMaxAgeChange}
          leftText="Max"
          min={minAge}
          required
        />
        <div>
          <Button loading={isLoading} type="submit">
            Retrieve Users
          </Button>
        </div>
      </RetrieveUserForm>
    </Card>
  );
};

export default RetrieveUsers;
