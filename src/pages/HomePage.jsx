import React from "react";
import { Dialog } from "../components/Dialogs";
import { Header } from "../components/Header";
import { Main } from "../components/Main/Main";

export const HomePage = () => {
  return (
    <div>
      <Dialog />
      <Header />
      <Main />
    </div>
  );
};
