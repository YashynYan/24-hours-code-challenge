import React, { useState } from "react";
import { RecentCategoriesBlock } from "../RecentCategoriesBlock";
import { RecentExperience } from "../RecentExperience";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchBlock } from "../SearchBlock/SearchBlock";

import "./Main.css";

export const Main = () => {
  const [searchText, setSearchText] = useState("");

  const onSearchHandler = (text) => {
    setSearchText(text);
  };

  return (
    <main>
      <SearchBar onSearch={onSearchHandler} />
      {searchText ? (
        <SearchBlock searchValue={searchText} />
      ) : (
        <>
          <RecentExperience />
          <RecentCategoriesBlock />
        </>
      )}
    </main>
  );
};
