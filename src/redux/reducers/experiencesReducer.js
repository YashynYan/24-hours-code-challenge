import defiSwapLogo from "./../../assets/icons/defi-swap-logo.svg";
import docuSignLogo from "./../../assets/icons/docu-sign-logo.svg";

const defaultState = [
  {
    experienceName: "DeFi Swap",
    description: "Swap your digital assets",
    logo: defiSwapLogo,
    users: '+200 users'
  },
  {
    experienceName: "Docu sign",
    description: "Sign smart contracts seamlessly",
    logo: docuSignLogo,
    users: '+1k users'
  },
];

const experiencesReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default experiencesReducer;
