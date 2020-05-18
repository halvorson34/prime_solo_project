const news = (state = [], action) => {
  switch (action.type) {
    case "SET_NEWS":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default news;
