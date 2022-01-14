import { render, screen } from "@testing-library/react";
import { SearchBlock } from "./SearchBlock";
import { Provider } from "react-redux";
import { store } from "./../../redux/store";

test("renders SearchInput with search value", () => {
  render(
    <Provider store={store}>
      <SearchBlock searchValue="d" />
    </Provider>
  );
  const searchContainer = screen.getByTestId("search-container");
  expect(searchContainer).toBeInTheDocument();

  const experienceBlocks = screen.getAllByTestId("experience-block");
  expect(experienceBlocks).toHaveLength(2);

  const searchBlockHeader = screen.getByTestId("search-block-header");
  expect(searchBlockHeader).toBeVisible();
  expect(searchBlockHeader).toHaveTextContent(
    `${experienceBlocks.length} experience found`
  );
});

test("renders SearchInput with no values", () => {
  render(
    <Provider store={store}>
      <SearchBlock searchValue="test" />
    </Provider>
  );
  const searchContainer = screen.getByTestId("search-container");
  expect(searchContainer).toBeInTheDocument();

  const experienceBlocks = screen.queryAllByTestId("experience-block");
  expect(experienceBlocks).toHaveLength(0);

  const searchBlockHeader = screen.getByTestId("search-block-header");
  expect(searchBlockHeader).toBeVisible();
  expect(searchBlockHeader).toHaveTextContent(
    `${experienceBlocks.length} experience found`
  );
});
