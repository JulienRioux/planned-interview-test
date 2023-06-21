import { FormEvent, ReactNode } from "react";

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
  minAge: number;
  maxAge: number;
  searchText: string;
  handleFiltersChange: (e: FormEvent<HTMLInputElement>) => void;
  handleMinMaxBlur: (e: FormEvent<HTMLInputElement>) => void;
}
