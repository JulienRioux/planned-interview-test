import * as React from "react";

import Card from "../card";
import { Hr } from "../hr";
import styled from "styled-components";
import { token } from "../../theme";
import { SearchFilter } from "../search-filter";
import { UsersTable } from "../users-table";

const SectionWrapper = styled.div`
  padding: ${token("$card-padding")};
`;

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
