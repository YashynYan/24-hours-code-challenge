import React from "react";
import userIcon from "./../../assets/icons/HeaderIcons/UserIcon.svg";

import "./UserBadge.css";

export const UserBadge = () => {
  return (
    <div className="badge-container" data-testid="badge-container">
      <img src={userIcon} alt="user icon" data-testid="user-icon" className="user-icon" />
      <span className="user-name" data-testid="user-name">
        Johndoe.near
      </span>
    </div>
  );
};
