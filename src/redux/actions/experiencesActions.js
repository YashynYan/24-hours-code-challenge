export const SELECT_ALL = "selectAll";
export const DISSELECT_ALL = "disselectAll";
export const SELECT_ITEM = "selectItem";

export const selectAll = () => {
  return {
    type: SELECT_ALL,
  };
};

export const disselectAll = () => {
  return {
    type: DISSELECT_ALL,
  };
};

export const selectItem = (item) => {
  return {
    type: SELECT_ITEM,
    payload: item,
  };
};
