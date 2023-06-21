import { ReactNode } from "react";

export interface UserProviderProps {
  children: ReactNode;
}

export interface IUsersContext {
  isLoading: boolean;
}
