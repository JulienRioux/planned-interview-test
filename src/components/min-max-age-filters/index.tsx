import * as React from "react";
import { Input } from "../input";
import { useUsers } from "../../hooks/use-users";
import Alert from "../alert";

const MinMaxAgeFilters = () => {
  const { handleFiltersChange, minAge, maxAge, handleMinMaxBlur } = useUsers();

  // Show a simple alert message when a the minAge is > than the maxAge
  const HAS_ERROR = Number(minAge) > Number(maxAge);

  return (
    <>
      <Input
        name="minAge"
        value={minAge}
        type="number"
        onChange={handleFiltersChange}
        leftText="Min"
        min={0}
        onBlur={handleMinMaxBlur}
      />
      <Input
        name="maxAge"
        value={maxAge}
        type="number"
        onChange={handleFiltersChange}
        leftText="Max"
        min={0}
        onBlur={handleMinMaxBlur}
      />

      {HAS_ERROR && <Alert>Error: Min age is higher than max age.</Alert>}
    </>
  );
};

export default MinMaxAgeFilters;
