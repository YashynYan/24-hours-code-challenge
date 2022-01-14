import { render, screen } from "@testing-library/react";
import { UserBadge } from "./UserBadge";

test("renders UserBadge", () => {
  render(<UserBadge />);
  const badgeContainer = screen.getByTestId("badge-container");
  expect(badgeContainer).toBeInTheDocument();

  //ideally for user icon and user name it should be mocked requested/responce to check if it renders properly
  const userIcon = screen.getByTestId("user-icon");
  expect(userIcon).toBeInTheDocument();

  const userName = screen.getByTestId("user-name");
  expect(userName).toBeInTheDocument();
  expect(userName).toHaveTextContent("Johndoe.near");
});
