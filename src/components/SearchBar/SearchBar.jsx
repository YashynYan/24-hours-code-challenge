import React from "react";
import { SearchInput } from "../SearchInput";
import filterIcon from "./../../assets/icons/filter-icon.svg";
import { useDispatch } from "react-redux";
import { launchDialog } from "../../redux/actions";

import "./SearchBar.css";
import { dialogTypes } from "../Dialogs/DialogTypes";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleOnSearch = (searchText) => {
    console.log(searchText);
  };

  const handleOnFilterIconClick = () => {
    dispatch(launchDialog({ dialogType: dialogTypes.experiencesDialog }));
  };

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
