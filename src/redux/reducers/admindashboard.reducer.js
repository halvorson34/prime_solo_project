const adminDashboard = (state = [], action) => {
  switch (action.type) {
    case "SET_ADMINDASHBOARD":
      return action.payload;
    case "GET_MESSAGE":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default adminDashboard;
