import { ReactNode } from "react";

export interface ITableRow {
  content: ReactNode;
  key: string;
  sorter?: () => void;
}
