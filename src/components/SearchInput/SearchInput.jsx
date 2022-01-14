import React from "react";
import searchIcon from "./../../assets/icons/search-icon.svg";

import "./SearchInput.css";

export const SearchInput = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    const { value } = event.target;
    onSearch(value);
  };

  return (
    <div
      className="search-input-container"
      data-testid="search-input-container"
    >
      <input
        type="text"
        className="search-input"
        data-testid="search-input"
        placeholder="Search experiences"
        onChange={handleSearchChange}
      />
      <img
        src={searchIcon}
        alt="magnifying glass icon"
        className="search-icon"
        data-testid="search-icon"
      />
    </div>
  );
};
