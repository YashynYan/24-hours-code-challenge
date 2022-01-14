import React from "react";
import { useSelector } from "react-redux";
import { ExperienceBlock } from "../ExperienceBlock";

import "./SearchBlock.css";

function SearchBlock({ searchValue }) {
  const experiences = useSelector((state) => state.experiences);

  const filteredExperiences = experiences.filter((item) =>
    item.experienceName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="search-container">
      <div className="search-block-header">{`${filteredExperiences.length} experience found`}</div>
      <div>
        {filteredExperiences.map((item) => (
          <ExperienceBlock
            experienceName={item.experienceName}
            logo={item.logo}
            description={item.description}
            users={item.users}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBlock;
