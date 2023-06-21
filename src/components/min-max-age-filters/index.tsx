import * as React from "react";
import { Input } from "../input";
import { useUsers } from "../../hooks/use-users";

const MinMaxAgeFilters = () => {
  const { handleFiltersChange, minAge, maxAge, handleMinMaxBlur } = useUsers();

  return (
    <>
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
    </>
  );
};

export default MinMaxAgeFilters;
