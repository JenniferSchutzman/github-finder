const githubReducer = (state, action) => {
  // console.log("action.type", action.type);

  // console.log("state before ...state", state);
  switch (action.type) {
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "GET_REPOS":
      // console.log("GET_REPOS", action.payload);
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
