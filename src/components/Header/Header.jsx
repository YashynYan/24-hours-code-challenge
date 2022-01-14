import React from "react";
import { UserBadge } from "../UserBadge/UserBadge";
import backArrow from "./../../assets/icons/HeaderIcons/BackArrow.svg";
import homePage from "./../../assets/icons/HeaderIcons/HomePage.svg";
import notification from "./../../assets/icons/HeaderIcons/Notification.svg";
import settings from "./../../assets/icons/HeaderIcons/Settings.svg";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-container" data-testid="header-container">
        <img src={backArrow} data-testid="back-arrow" alt="back arrow icon" />
        <img src={homePage} data-testid="home-page" alt="back arrow icon" />
        <UserBadge />
        <img
          src={notification}
          data-testid="notifications"
          alt="back arrow icon"
        />
        <img
          src={settings}
          data-testid="settings"
          className="settings"
          alt="back arrow icon"
        />
      </div>
    </header>
  );
};
