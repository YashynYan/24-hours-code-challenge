import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("renders Header", () => {
  render(<Header />);
  const headerContainer = screen.getByTestId("header-container");
  expect(headerContainer).toBeInTheDocument();

  const backArrow = screen.getByTestId("back-arrow");
  expect(backArrow).toBeInTheDocument();

  const homePage = screen.getByTestId("home-page");
  expect(homePage).toBeInTheDocument();

  const notifications = screen.getByTestId("notifications");
  expect(notifications).toBeInTheDocument();

  const settings = screen.getByTestId("settings");
  expect(settings).toBeInTheDocument();
});