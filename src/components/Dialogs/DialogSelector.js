import React from "react";
import { useSelector } from "react-redux";
import { dialogTypes } from "./DialogTypes";
import { ExperienceDialog } from "./ExperienceDialog";

export const DialogSelector = () => {
  const dialog = useSelector((state) => state.dialog);
  console.log(dialog);
  switch (dialog?.dialogType) {
    case dialogTypes.experiencesDialog:
      return <ExperienceDialog />;
    default:
      return null;
  }
};
