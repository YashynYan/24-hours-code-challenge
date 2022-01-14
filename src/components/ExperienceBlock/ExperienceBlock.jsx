import React from "react";
import arrowRight from "./../../assets/icons/arrow-right.svg";

import "./ExperienceBlock.css";

export const ExperienceBlock = ({
  logo,
  experienceName,
  description,
  users,
}) => {
  return (
    <div className="experience-block" data-testid="experience-block">
      <div className="details-block">
        <img src={logo} alt="defi logo" />
        <div className="info">
          <span className="experience-name" data-testid="experience-name">
            {experienceName}
          </span>
          <span
            className="experience-description"
            data-testid="experience-description"
          >
            {description}
          </span>
          <span className="experience-users" data-testid="experience-users">
            {users}
          </span>
        </div>
      </div>
      <div className="arrow-block">
        <img src={arrowRight} alt="go to logo" />
      </div>
    </div>
  );
};
