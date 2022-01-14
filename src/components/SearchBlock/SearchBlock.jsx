import React from "react";
import { useSelector } from "react-redux";
import { ExperienceBlock } from "../ExperienceBlock";

import "./SearchBlock.css";

export const SearchBlock = ({ searchValue }) => {
  const experiences = useSelector((state) => state.experiences);

  const filteredExperiences = experiences.filter((item) =>
    item.experienceName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="search-container" data-testid="search-container">
      <div
        className="search-block-header"
        data-testid="search-block-header"
      >{`${filteredExperiences.length} experience found`}</div>
      <div>
        {filteredExperiences.map((item) => (
          <ExperienceBlock
            key={item.experienceName}
            experienceName={item.experienceName}
            logo={item.logo}
            description={item.description}
            users={item.users}
          />
        ))}
      </div>
    </div>
  );
};
