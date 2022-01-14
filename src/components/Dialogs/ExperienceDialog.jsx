import React from "react";
import { DialogWindow } from "./DialogWindow";
import { useDispatch, useSelector } from "react-redux";

import "./ExperienceDialog.css";
import { disselectAll, selectAll, selectItem } from "../../redux/actions";

export const ExperienceDialog = () => {
  const experiences = useSelector((state) => state.experienceOptions);
  const dispatch = useDispatch();

  const numberOfSelectedFilter = experiences.filter(
    (item) => item.selected
  ).length;

  const renderHeader = () => {
    return (
      <div>
        <span className="header-title">Filter</span>
        <span className="selected-filters">{numberOfSelectedFilter}</span>
      </div>
    );
  };

  const optionChangeHandler = (event) => {
    const { value, id } = event.target;
    if (id === "all-experiences-option") {
      if (value === "true") {
        dispatch(disselectAll());
      } else {
        dispatch(selectAll());
      }
    } else {
      dispatch(selectItem({ experienceName: value }));
    }
  };

  const renderBody = () => {
    return (
      <div className="experiences-body">
        <div className="option-wrapper all-experiences">
          <input
            type="checkbox"
            checked={numberOfSelectedFilter === experiences.length}
            value={numberOfSelectedFilter === experiences.length}
            id="all-experiences-option"
            onChange={optionChangeHandler}
          />
          <span className="option-name">All Experiences</span>
        </div>
        {experiences.map((item) => {
          return (
            <div className="option-wrapper" key={item.experienceName}>
              <input
                type="checkbox"
                value={item.experienceName}
                checked={item.selected}
                onChange={optionChangeHandler}
              />
              <img src={item.logo} alt={`${item.experienceName} logo`} />
              <span className="option-name">{item.experienceName}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return <DialogWindow header={renderHeader()} body={renderBody()} />;
};
