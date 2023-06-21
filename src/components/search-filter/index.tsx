import * as React from "react";

import { Input } from "../input";
import { useUsers } from "../../hooks/use-users";

export const SearchFilter = () => {
  const { handleFiltersChange, searchText } = useUsers();

  return (
    <Input
      placeholder="Search users"
      name="searchText"
      value={searchText}
      type="search"
      onChange={handleFiltersChange}
    />
  );
};
