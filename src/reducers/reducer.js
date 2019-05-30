const initialState = {
  event: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_EVENT":
      state = {
        ...state,
        events: action.payload
      };
      return state;

    default:
      return initialState;
  }
};
