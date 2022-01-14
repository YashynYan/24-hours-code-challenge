import {
  DISSELECT_ALL,
  SELECT_ALL,
  SELECT_ITEM,
} from "../actions/experiencesActions";
import exchangeLogo from "./../../assets/icons/ExperiencesIcons/ExchangesLogo.svg";
import gamesLogo from "./../../assets/icons/ExperiencesIcons/GamesLogo.svg";
import marketplaceLogo from "./../../assets/icons/ExperiencesIcons/MarketplaceLogo.svg";
import defiLogo from "./../../assets/icons/ExperiencesIcons/DeFiLogo.svg";
import othersLogo from "./../../assets/icons/ExperiencesIcons/OthersLogo.svg";

const defaultState = [
  { experienceName: "Exchanges", logo: exchangeLogo, selected: false },
  { experienceName: "Games", logo: gamesLogo, selected: true },
  { experienceName: "Marketplace", logo: marketplaceLogo, selected: false },
  { experienceName: "DeFi", logo: defiLogo, selected: true },
  { experienceName: "Others", logo: othersLogo, selected: false },
];

const experienceOptionsReducer = (state = defaultState, action) => {
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

export default experienceOptionsReducer;
