import * as React from "react";
import Card from "../card";
import { Input } from "../input";
import { useCallback } from "react";
import { Button } from "../button";
import { RetrieveUsersWrapper } from "./styles";
import { useUsers } from "../../hooks/use-users";

const RetrieveUsers = () => {
  const {
    isLoading,
    getUsers,
    handleFiltersChange,
    minAge,
    maxAge,
    handleMinMaxBlur,
  } = useUsers();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      getUsers();
    },
    [getUsers]
  );

  return (
    <Card>
      <RetrieveUsersWrapper>
        <Input
          name="minAge"
          value={minAge}
          type="number"
          onChange={handleFiltersChange}
          leftText="Min"
          min={0}
          max={maxAge}
          required
          onBlur={handleMinMaxBlur}
        />
        <Input
          name="maxAge"
          value={maxAge}
          type="number"
          onChange={handleFiltersChange}
          leftText="Max"
          min={minAge}
          onBlur={handleMinMaxBlur}
          required
        />
        <div>
          <Button loading={isLoading} onClick={handleSubmit}>
            Retrieve Users
          </Button>
        </div>
      </RetrieveUsersWrapper>
    </Card>
  );
};

export default RetrieveUsers;
