const initialState = {
  events: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_EVENT":
      return {
        ...state,
        events: action.payload
      };
		case "GET_EVENTS":
			return {
				...state,
				events: action.payload
			}
    default:
      return initialState;
  }
};
