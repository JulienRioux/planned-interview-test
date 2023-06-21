import * as React from "react";
import { createContext, useCallback, useEffect, useState } from "react";
import { IUser, IUsersContext, UserProviderProps } from "./types";
import { API_URL, USER_ROUTES } from "../../configs";
import { sortUsers } from "../../utils/sort";
import { formatUser } from "../../utils/format-user";

export const UsersContext = createContext<IUsersContext>(
  {} as any as IUsersContext
);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Handling the min and max age
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);

  const handleMinMaxAgeChange = useCallback((e) => {
    // TODO: Deal with min and max overlapping...
    if (e.target.name === "minAge") {
      setMinAge(e.target.value);
    }
    if (e.target.name === "maxAge") {
      setMaxAge(e.target.value);
    }
  }, []);

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

      // TODO: Do this while sorting...
      // Filter users based on minAge and maxAge
      const usersFilteredByAge = allUsers.filter(
        ({ age }) => age >= minAge && age <= maxAge
      );

      const sortedAndFilteredUsers = sortUsers(usersFilteredByAge);

      setUsers(sortedAndFilteredUsers);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  }, [maxAge, minAge]);

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
      handleMinMaxAgeChange,
      minAge,
      maxAge,
    };
  }, [isLoading, users, getUsers, handleMinMaxAgeChange, minAge, maxAge]);

  return (
    <UsersContext.Provider value={getCtx()}>{children}</UsersContext.Provider>
  );
};

export default UsersContext.Consumer;
