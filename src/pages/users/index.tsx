import * as React from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Layout } from "../../components/layout";
import Card from "../../components/card";
import { RetrieveUserForm, UsersPageWrapper } from "./styles";
import { Table } from "../../components/table";
import Checkbox from "../../components/checkbox";
import { Hr } from "../../components/hr";
import { useUsers } from "../../hooks/use-users";

export const UsersPage = () => {
  const { isLoading, users } = useUsers();

  return (
    <Layout>
      {isLoading && <p>Loading...</p>}
      <h2>Users</h2>

      <UsersPageWrapper>
        <div>
          <Card>
            <RetrieveUserForm>
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
        </div>

        <div>
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
              rows={users.map(({ name, age }, index) => (
                <tr key={`${name}-${age}-${index}`}>
                  <td>
                    <Checkbox />
                  </td>
                  <td>{name}</td>
                  <td>{age}</td>
                </tr>
              ))}
            />
          </Card>
        </div>
      </UsersPageWrapper>
    </Layout>
  );
};
