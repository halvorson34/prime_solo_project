const doggos = (state = [], action) => {
  switch (action.type) {
    case "SET_DOGGOS":
      return action.payload;
    default:
      return state;
  }
};

export default doggos;
