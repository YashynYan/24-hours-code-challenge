import React from "react";
import { useSelector } from "react-redux";

import "./RecentExperience.css";
import { ExperienceBlock } from "../ExperienceBlock";

export const RecentExperience = () => {
  const experiences = useSelector((state) => state.experiences);

  return (
    <div className="recent-experience-container">
      <div className="recent-experience-title">
        <span>Recent Experiences</span>
      </div>
      {experiences.map((item) => {
        return (
          <ExperienceBlock
            logo={item.logo}
            experienceName={item.experienceName}
            description={item.description}
            users={item.users}
          />
        );
      })}
    </div>
  );
};
