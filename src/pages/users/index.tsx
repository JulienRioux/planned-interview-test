import * as React from "react";
import { Layout } from "../../components/layout";
import { UsersPageWrapper } from "./styles";
import RetrieveUsers from "../../components/retrieve-users";
import { UsersDisplay } from "../../components/users-display";

export const UsersPage = () => {
  return (
    <Layout>
      <h2>Users</h2>

      <UsersPageWrapper>
        <div>
          <RetrieveUsers />
        </div>

        <div>
          <UsersDisplay />
        </div>
      </UsersPageWrapper>
    </Layout>
  );
};
