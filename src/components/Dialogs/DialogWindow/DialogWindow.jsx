import React from "react";
import { closeDialog } from "../../../redux/actions";
import closeIcon from "./../../../assets/icons/close-icon.svg";
import { useDispatch } from "react-redux";

import "./DialogWindow.css";

export const DialogWindow = ({ header, body, onClose }) => {
  const dispatch = useDispatch();

  const onCloseClickHandler = () => {
    onClose && onClose();
    dispatch(closeDialog());
  };

  return (
    <div className="dialog-container" data-testid="dialog-container">
      <div className="dialog-window">
        <div className="dialog-header">
          {header}
          <img
            src={closeIcon}
            data-testid="close-icon"
            alt="close icon"
            onClick={onCloseClickHandler}
          />
        </div>
        <div className="dialog-body">{body}</div>
      </div>
    </div>
  );
};
