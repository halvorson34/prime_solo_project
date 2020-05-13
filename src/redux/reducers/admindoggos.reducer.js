const adminDoggos = (state = [], action) => {
  switch (action.type) {
    case "GET_DOGGOS":
      return action.payload;
    default:
      return state;
  }
};

export default adminDoggos;
