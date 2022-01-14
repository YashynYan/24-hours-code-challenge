import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { DialogWindow } from "./DialogWindow";
import { store } from "./../../../redux/store/store";

test("renders DialogWindow", () => {
  const onClose = jest.fn();
  render(
    <Provider store={store}>
      <DialogWindow
        header={<span data-testid="test-header">Test Header</span>}
        body={<div data-testid="test-body">Test Body</div>}
        onClose={onClose}
      />
    </Provider>
  );

  const dialogContainer = screen.getByTestId("dialog-container");
  expect(dialogContainer).toBeInTheDocument();

  const testHeader = screen.getByTestId("test-header");
  expect(testHeader).toBeInTheDocument();
  expect(testHeader).toHaveTextContent("Test Header");

  const closeIcon = screen.getByTestId("close-icon");
  expect(closeIcon).toBeInTheDocument();
  fireEvent.click(closeIcon);
  expect(onClose).toBeCalled();

  const testBody = screen.getByTestId("test-body");
  expect(testBody).toBeInTheDocument();
  expect(testBody).toHaveTextContent("Test Body");
});
