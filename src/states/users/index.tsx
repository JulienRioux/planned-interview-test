import * as React from "react";
import { createContext, useCallback, useEffect, useState } from "react";
import { IUsersContext, UserProviderProps } from "./types";
import { API_URL, USER_ROUTES } from "../../configs";
import { sortUsers } from "../../utils/sort";

export const UsersContext = createContext<IUsersContext>(
  {} as any as IUsersContext
);

// TODO: Move it inside utils
const formatUser = (
  { name: { firstName, lastName }, age }: any,
  index: number
) => ({
  name: `${firstName} ${lastName}`,
  age,
  // Creating an ID since there is no one from the API
  uid: `${firstName} ${lastName}-${age}-${index}`,
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const routesToFetch = USER_ROUTES.map((route) => `${API_URL}${route}`);

      const [kids, adults, seniors] = await Promise.all(
        routesToFetch.map(async (url, index) => {
          const resp = await fetch(url);
          const fetchedUser = await resp.json();
          // TODO: refactor this
          // Formatting the users before storing them.
          if (index === 2) {
            return fetchedUser.map((user: any, index: number) =>
              formatUser(user, index)
            );
          }
          return fetchedUser.data.map((user: any, index: number) =>
            formatUser(user, index)
          );
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

  const FETCH_USER_ON_LOAD = false;

  useEffect(() => {
    if (FETCH_USER_ON_LOAD) {
      // Fetching users from start
      getUsers();
    }
  }, [FETCH_USER_ON_LOAD, getUsers]);

  const getCtx = useCallback(() => {
    return {
      isLoading,
      users,
      getUsers,
    };
  }, [getUsers, isLoading, users]);

  return (
    <UsersContext.Provider value={getCtx()}>{children}</UsersContext.Provider>
  );
};

export default UsersContext.Consumer;
