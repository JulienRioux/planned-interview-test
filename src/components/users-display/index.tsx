import * as React from "react";

import Card from "../card";
import { Hr } from "../hr";
import { SearchFilter } from "../search-filter";
import { UsersTable } from "../users-table";
import { SectionWrapper } from "./styles";

export const UsersDisplay = () => {
  return (
    <Card>
      <SectionWrapper>
        <SearchFilter />
      </SectionWrapper>

      <Hr />

      <SectionWrapper>
        <UsersTable />
      </SectionWrapper>
    </Card>
  );
};
