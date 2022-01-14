import {
  DISSELECT_ALL,
  SELECT_ALL,
  SELECT_ITEM,
} from "../actions/experiencesActions";
import exchangeLogo from "./../../assets/icons/ExperiencesIcons/ExchangesLogo.svg";

const defaultState = [
  { experienceName: "Exchanges", logo: exchangeLogo, selected: false },
  { experienceName: "Games", logo: exchangeLogo, selected: false },
  { experienceName: "Marketplace", logo: exchangeLogo, selected: false },
  { experienceName: "DeFi", logo: exchangeLogo, selected: false },
  { experienceName: "Others", logo: exchangeLogo, selected: false },
];

const experiencesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_ALL:
      return state.map((item) => ({ ...item, selected: true }));
    case DISSELECT_ALL:
      return state.map((item) => ({ ...item, selected: false }));
    case SELECT_ITEM:
      return state.map((item) =>
        item.experienceName === action.payload.experienceName
          ? { ...item, selected: !item.selected }
          : item
      );
    default:
      return state;
  }
};

export default experiencesReducer;
