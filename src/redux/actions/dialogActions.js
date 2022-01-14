export const CLOSE_DIALOG = "closeDialog";
export const LAUNCH_DIALOG = "launchDialog";

export const closeDialog = () => {
  return {
    type: CLOSE_DIALOG,
  };
};

export const launchDialog = ({ dialogType }) => {
  return {
    type: LAUNCH_DIALOG,
    payload: { dialogType },
  };
};
