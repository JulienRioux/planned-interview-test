import styled from "styled-components";

export const TableWrapper = styled.div`
  font-size: 14px;
  text-align: left;

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
  }

  tr {
    display: grid;
    grid-template-columns: 40px 1fr 1fr;
    border-bottom: 1px solid #0001;

    &:last-of-type {
      border: none;
    }
  }

  th,
  td {
    padding: 12px 0;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  thead {
    font-weight: bold;
  }
`;

export const SortButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 4px;
  cursor: pointer;
  display: flex;
  transition: 0.2s;

  :hover {
    background: #0001;
    border-radius: 2px;
  }
`;
