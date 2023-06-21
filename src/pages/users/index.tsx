import * as React from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Layout } from "../../components/layout";
import Card from "../../components/card";
import { RetrieveUserForm, UsersPageWrapper } from "./styles";
import { Table } from "../../components/table";
import Checkbox from "../../components/checkbox";
import { Hr } from "../../components/hr";
import { sortUsers } from "../../utils/sort";
import { useCallback, useEffect, useState } from "react";
import { API_URL, USER_ROUTES, routes } from "../../configs";

const FAKE_USERS = [
  { uid: 1, name: "bruce", age: 40 },
  { uid: 2, name: "zoidberg", age: 22 },
  { uid: 3, name: "alex", age: 22 },
  { uid: 4, name: "alex", age: 30 },
];

const formatUser = ({ name: { firstName, lastName }, age }: any) => ({
  name: `${firstName} ${lastName}`,
  age: age,
});

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const routesToFetch = USER_ROUTES.map((route) => `${API_URL}${route}`);

      const [kids, adults, seniors] = await Promise.all(
        routesToFetch.map(async (url, index) => {
          const resp = await fetch(url);
          const fetchedUser = await resp.json();
          // Formatting the users before storing them.
          if (index === 2) {
            return fetchedUser.map((user: any) => formatUser(user));
          }
          return fetchedUser.data.map((user: any) => formatUser(user));
        })
      );
      const allUsers = [...kids, ...adults, ...seniors];

      const sortedUsers = sortUsers(allUsers);

      setUsers(sortedUsers);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    //
    fetchUsers();
  }, [fetchUsers]);

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
