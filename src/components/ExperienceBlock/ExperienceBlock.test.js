import { render, screen } from "@testing-library/react";
import { ExperienceBlock } from "./ExperienceBlock";

test("renders SearchInput with search value", () => {
  const props = {
    logo: null,
    experienceName: "Test Name",
    description: "Test description",
    users: "+500 test users",
  };
  render(<ExperienceBlock {...props} />);
  const experienceBlock = screen.getByTestId("experience-block");
  expect(experienceBlock).toBeVisible();

  const experienceName = screen.getByTestId("experience-name");
  expect(experienceName).toBeVisible();
  expect(experienceName).toHaveTextContent(props.experienceName);

  const experienceDescription = screen.getByTestId("experience-description");
  expect(experienceDescription).toBeVisible();
  expect(experienceDescription).toHaveTextContent(props.description);

  const experienceUsers = screen.getByTestId("experience-users");
  expect(experienceUsers).toBeVisible();
  expect(experienceUsers).toHaveTextContent(props.users);
});
