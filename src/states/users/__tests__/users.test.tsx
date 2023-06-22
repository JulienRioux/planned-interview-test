import {
  renderHook,
  act,
  WrapperComponent,
} from "@testing-library/react-hooks";
import { FormEvent } from "react";
import { useUsers } from "../../../hooks/use-users";
import { UserProvider } from "..";
import {
  ADULTS_DATA,
  FILTER_1_USERS_RESULT,
  FILTER_2_USERS_RESULT,
  FILTER_3_USERS_RESULT,
  KIDS_DATA,
  SENIORS_DATA,
  SORTED_USERS,
} from "../__fixtures__";
import { UserProviderProps } from "../types";

global.fetch = jest.fn().mockImplementation((url: string) => {
  if (url === "http://localhost:8099/users/kids") {
    return { json: () => KIDS_DATA };
  }
  if (url === "http://localhost:8099/users/adults") {
    return { json: () => ADULTS_DATA };
  }
  if (url === "http://localhost:8099/users/seniors") {
    return { json: () => SENIORS_DATA };
  }
});

// Setting up test variables for input changes
const MIN_AGE_VALUE = 10;
const MAX_AGE_VALUE = 50;
const SEARCH_TEXT_VALUE = "bob";

const minValEvent = {
  target: { name: "minAge", value: MIN_AGE_VALUE },
} as unknown as FormEvent<HTMLInputElement>;

const maxValEvent = {
  target: { name: "maxAge", value: MAX_AGE_VALUE },
} as unknown as FormEvent<HTMLInputElement>;

const searchTextEvent = {
  target: { name: "searchText", value: SEARCH_TEXT_VALUE },
} as unknown as FormEvent<HTMLInputElement>;

/** Testing the useUsers hook. */
describe("useUsers", () => {
  const wrapper = UserProvider as WrapperComponent<UserProviderProps>;

  it("Renders the right initial state.", () => {
    const { result } = renderHook(() => useUsers(), { wrapper });

    // Making sure the initial state is setup as expected.
    expect(result.current.isLoading).toBe(false);
    expect(result.current.minAge).toBe(0);
    expect(result.current.maxAge).toBe(100);
    expect(result.current.searchText).toBe("");
    expect(result.current.users).toStrictEqual([]);
  });

  it("Changing the state.", () => {
    const { result } = renderHook(() => useUsers(), { wrapper });

    // Make sure the initial values are as expected.
    expect(result.current.minAge).toBe(0);
    expect(result.current.maxAge).toBe(100);
    expect(result.current.searchText).toBe("");

    // Handling min & max age value change.
    act(() => {
      result.current.handleFiltersChange(minValEvent);
      result.current.handleFiltersChange(maxValEvent);
      result.current.handleFiltersChange(searchTextEvent);
    });

    expect(result.current.minAge).toBe(MIN_AGE_VALUE);
    expect(result.current.maxAge).toBe(MAX_AGE_VALUE);
    expect(result.current.searchText).toBe(SEARCH_TEXT_VALUE);
  });

  it("Fetch users and sort them.", async () => {
    const { result } = renderHook(() => useUsers(), { wrapper });

    // Fetch users data.
    await act(async () => {
      await result.current.getUsers();
    });

    expect(result.current.users).toStrictEqual(SORTED_USERS);
  });

  it("Filter users once fetched users.", async () => {
    const { result } = renderHook(() => useUsers(), { wrapper });

    // Fetch users data.
    await act(async () => {
      await result.current.getUsers();
    });

    // Searching for "bob".
    await act(async () => {
      await result.current.handleFiltersChange(searchTextEvent);
    });

    expect(result.current.users).toStrictEqual(FILTER_1_USERS_RESULT);

    // Setting up the min age value to 10.
    await act(async () => {
      await result.current.handleFiltersChange(minValEvent);
    });

    expect(result.current.users).toStrictEqual(FILTER_2_USERS_RESULT);

    // Setting up the max age value to 50.
    await act(async () => {
      await result.current.handleFiltersChange(maxValEvent);
    });

    expect(result.current.users).toStrictEqual(FILTER_3_USERS_RESULT);
  });

  it("Filter users before fetching users.", async () => {
    const { result } = renderHook(() => useUsers(), { wrapper });

    // Setting up filters before fetching.
    await act(async () => {
      await result.current.handleFiltersChange(searchTextEvent);
      await result.current.handleFiltersChange(minValEvent);
      await result.current.handleFiltersChange(maxValEvent);
    });

    expect(result.current.minAge).toBe(MIN_AGE_VALUE);
    expect(result.current.maxAge).toBe(MAX_AGE_VALUE);
    expect(result.current.searchText).toBe(SEARCH_TEXT_VALUE);
    // Making sure we're not fetching users before calling `getUsers`.
    expect(result.current.users).toStrictEqual([]);

    // Fetch users data
    await act(async () => {
      await result.current.getUsers();
    });

    expect(result.current.users).toStrictEqual(FILTER_3_USERS_RESULT);
  });
});
