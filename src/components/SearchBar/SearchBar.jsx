import React from "react";
import { SearchInput } from "../SearchInput";
import filterIcon from "./../../assets/icons/filter-icon.svg";

import "./SearchBar.css";

export const SearchBar = () => {
  const handleOnSearch = (searchText) => {
    console.log(searchText);
  };

  const handleOnFilterIconClick = () => {};

  return (
    <div className="search-bar-container">
      <SearchInput onSearch={handleOnSearch} />
      <img
        src={filterIcon}
        onClick={handleOnFilterIconClick}
        alt="filter icon"
        data-testid="filter-icon"
      />
    </div>
  );
};
