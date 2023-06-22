import "@testing-library/jest-dom";

import { render, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Input } from "..";

describe("<Input />", () => {
  it("Renders properly.", async () => {
    const { getByTestId, queryByTestId } = render(
      <Input value={0} onChange={() => null} />
    );

    expect(getByTestId("input-component")).toBeInTheDocument();
    expect(queryByTestId("input-search-icon")).not.toBeInTheDocument();
    expect(queryByTestId("input-left-text")).not.toBeInTheDocument();
  });

  it("Renders with a value.", () => {
    const { getByDisplayValue } = render(
      <Input value="Hello world" onChange={() => null} />
    );

    expect(getByDisplayValue("Hello world")).toHaveAttribute(
      "data-testid",
      "input-component"
    );
  });

  it("Show the search icon when the input is of type search.", () => {
    const { getByTestId } = render(
      <Input value={0} type="search" onChange={() => null} />
    );

    expect(getByTestId("input-search-icon")).toBeInTheDocument();
  });

  it("Renders the left text.", () => {
    const { getByText } = render(
      <Input value={0} leftText="Max" onChange={() => null} />
    );

    expect(getByText("Max"));
  });

  it("Renders only the left text when also type of search.", () => {
    const { getByText, queryByTestId } = render(
      <Input value={0} leftText="Max" onChange={() => null} type="search" />
    );

    expect(getByText("Max"));
    expect(queryByTestId("input-search-icon")).not.toBeInTheDocument();
  });

  it("Make sure to trigger the onChange function when the input value changes.", () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(<Input value="" onChange={handleChange} />);

    fireEvent.change(getByTestId("input-component"), {
      target: { value: "Hello world" },
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
