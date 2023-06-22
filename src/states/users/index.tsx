import * as React from "react";
import { createContext, useCallback, useEffect, useState } from "react";
import { IUser, IUserFromDB, IUsersContext, UserProviderProps } from "./types";
import { API_USER_ROUTES, routes } from "../../configs";
import { sortUsers } from "../../utils/sort";
import { formatUser } from "../../utils/format-user";

export const UsersContext = createContext<IUsersContext>(
  {} as any as IUsersContext
);

const [INITIAL_MIN_AGE, INITIAL_MAX_AGE] = [0, 100];

export const UserProvider = ({ children }: UserProviderProps) => {
  // This is the data coming from the API (Will not changed unless re-trigerring the "Retrieve Users" button.)
  const [users, setUsers] = useState<IUser[]>([]);
  // This is the filtered dataset (Users that we're displaying to the UI.)
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  // Handling the min/max age and text search filters
  const [minAge, setMinAge] = useState(INITIAL_MIN_AGE);
  const [maxAge, setMaxAge] = useState(INITIAL_MAX_AGE);
  const [searchText, setSearchText] = useState("");

  // Handing all filters
  const handleFiltersChange = useCallback((e) => {
    if (e.target.name === "minAge") {
      setMinAge(e.target.value);
    }
    if (e.target.name === "maxAge") {
      setMaxAge(e.target.value);
    }
    if (e.target.name === "searchText") {
      setSearchText(e.target.value);
    }
  }, []);

  // Make sure the min/max age input are not empty.
  const handleMinMaxBlur = useCallback((e) => {
    // Make sure the data are always in a good state
    if (e.target.name === "minAge" && e.target.value === "") {
      setMinAge(INITIAL_MIN_AGE);
    }
    if (e.target.name === "maxAge" && e.target.value === "") {
      setMaxAge(INITIAL_MAX_AGE);
    }
  }, []);

  // Fetching the users
  const getUsers = useCallback(async () => {
    setIsLoading(true);
    // Reset the data when refetching new users
    setUsers([]);
    setFilteredUsers([]);

    try {
      // Fetching all the routes at once to have a quicker experience.
      const [kids, adults, seniors] = await Promise.all(
        API_USER_ROUTES.map(async (url, index) => {
          const resp = await fetch(url);
          const fetchedUser = await resp.json();

          // Dealing with the different API endpoint design
          const data =
            url === routes.users.seniors ? fetchedUser : fetchedUser.data;

          // Return the formatted array of users
          return data.map((user: IUserFromDB, index: number) =>
            formatUser(user, index)
          );
        })
      );
      // Put all users in a single array and sort alphabetically
      const sortedAndFilteredUsers = sortUsers([
        ...kids,
        ...adults,
        ...seniors,
      ]);

      // Init the users coming from the API and the filtered list
      setUsers(sortedAndFilteredUsers);
    } catch (err) {
      // Do something with the log & show an error message.
      console.log("Error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Deal with filters automatically when they're changing.
  useEffect(() => {
    // Filter users based on minAge and maxAge
    const usersFilteredByAge = users.filter(
      ({ age }) => age >= minAge && age <= maxAge
    );
    // Filter based on the search text
    const filteredByText = usersFilteredByAge.filter((obj) =>
      obj.name.toLowerCase().includes(searchText)
    );
    // Set the filtered users array.
    setFilteredUsers(filteredByText);
  }, [maxAge, minAge, searchText, users]);

  const getCtx = useCallback(() => {
    return {
      isLoading,
      users: filteredUsers,
      getUsers,
      handleFiltersChange,
      minAge,
      maxAge,
      searchText,
      handleMinMaxBlur,
    };
  }, [
    isLoading,
    filteredUsers,
    getUsers,
    handleFiltersChange,
    minAge,
    maxAge,
    searchText,
    handleMinMaxBlur,
  ]);

  return (
    <UsersContext.Provider value={getCtx()}>{children}</UsersContext.Provider>
  );
};

export default UsersContext.Consumer;
