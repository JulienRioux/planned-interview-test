import * as React from "react";
import Card from "../card";
import { Button } from "../button";
import { RetrieveUsersWrapper } from "./styles";
import { useUsers } from "../../hooks/use-users";
import MinMaxAgeFilters from "../min-max-age-filters";

const RetrieveUsers = () => {
  const { isLoading, getUsers } = useUsers();

  return (
    <Card>
      <RetrieveUsersWrapper>
        <MinMaxAgeFilters />
        <div>
          <Button loading={isLoading} onClick={getUsers}>
            Retrieve Users
          </Button>
        </div>
      </RetrieveUsersWrapper>
    </Card>
  );
};

export default RetrieveUsers;
