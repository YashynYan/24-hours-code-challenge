import React from "react";
import { DialogWindow } from "./DialogWindow";
import { useSelector } from "react-redux";

export const ExperienceDialog = () => {
  const experiences = useSelector((state) => state.experiences);
  console.log(experiences);

  return <DialogWindow />;
};
