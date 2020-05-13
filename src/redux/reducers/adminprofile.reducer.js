const adminProfile = (state = [], action) => {
  switch (action.type) {
    case "SET_ADMINPROFILE":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default adminProfile;
