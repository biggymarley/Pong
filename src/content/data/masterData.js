export const defaultPlayerData = {
  uid: "",
  username: "",
};

export const defaultStatusData = {
  loading: true,
  snackbar: {
    open: false,
    message: "a message",
    type: "success", // success | error
  },
  confirmationDialog: {
    open: false,
    title: "a title",
    message: "a message",
    field: false, // text field
    callback: () => {},
    type: "positive", // positive | negative
    buttonLabel: "valider",
  },
};
