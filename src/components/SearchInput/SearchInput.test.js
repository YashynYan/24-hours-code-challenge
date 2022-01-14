import { fireEvent, render, screen } from "@testing-library/react";
import { SearchInput } from "./SearchInput";

test("renders SearchInput", () => {
  render(<SearchInput />);
  const searchInputContainer = screen.getByTestId("search-input-container");
  expect(searchInputContainer).toBeInTheDocument();

  const searchInput = screen.getByTestId("search-input");
  expect(searchInput).toBeInTheDocument();

  const searchIcon = screen.getByTestId("search-icon");
  expect(searchIcon).toBeInTheDocument();
});

test("onSearch functionality", () => {
  const onSearch = jest.fn();

  render(<SearchInput onSearch={onSearch} />);

  const searchInput = screen.getByTestId("search-input");
  expect(searchInput).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: "test" } });
  expect(onSearch).toBeCalledWith("test");
});
