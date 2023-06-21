import { ReactNode } from "react";

export interface UserProviderProps {
  children: ReactNode;
}

export interface IUser {
  name: string;
  age: number;
  uid: string;
}

export interface IUsersContext {
  isLoading: boolean;
  users: IUser[];
  getUsers: () => void;
}
