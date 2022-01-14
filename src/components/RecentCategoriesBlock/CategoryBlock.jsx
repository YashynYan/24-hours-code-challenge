import React from "react";
import greyHideChevron from "./../../assets/icons/grey-hide-chevron.svg";

import "./CategoryBlock.css";

function CategoryBlock({ logo, title, backgroundColor }) {
  return (
    <div
      className="category-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="image-block">
        <img src={logo} alt={`${title} logo`} />
      </div>
      <div className="category-title-block">
        <div>{title}</div>
        <div>
          <img src={greyHideChevron} alt="grey hide chevron" />
        </div>
      </div>
    </div>
  );
}

export default CategoryBlock;
