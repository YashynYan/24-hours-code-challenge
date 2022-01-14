import React from "react";
import hideChevron from "./../../assets/icons/hide-chevron.svg";
import exchangeLogo from "./../../assets/icons/ExperiencesIcons/ExchangesLogo.svg";
import gamesLogo from "./../../assets/icons/ExperiencesIcons/GamesLogo.svg";
import marketplaceLogo from "./../../assets/icons/ExperiencesIcons/MarketplaceLogo.svg";
import defiLogo from "./../../assets/icons/ExperiencesIcons/DeFiLogo.svg";

import "./RecentCategoriesBlock.css";
import CategoryBlock from "./CategoryBlock";

const mockCategories = [
  {
    title: "Exchanges",
    logo: exchangeLogo,
    backgroundColor: "#EAEFFF",
  },
  {
    title: "Games",
    logo: gamesLogo,
    backgroundColor: "#F5F5F5",
  },
  {
    title: "Marketplace",
    logo: marketplaceLogo,
    backgroundColor: "#E2F9F3",
  },
  {
    title: "Defi",
    logo: defiLogo,
    backgroundColor: "#FFF3EC",
  },
];

export const RecentCategoriesBlock = () => {
  return (
    <div className="recent-categories-container">
      <div className="recenta-categories-header">
        <div className="header-title">Popular Categories</div>
        <div className="see-all">
          <span className="see-all-text">See All</span>
          <img src={hideChevron} alt="show/hide chevron" />
        </div>
      </div>
      <div className="recent-categories">
        {mockCategories.map((item) => {
          return (
            <CategoryBlock
              title={item.title}
              logo={item.logo}
              backgroundColor={item.backgroundColor}
            />
          );
        })}
      </div>
    </div>
  );
};
