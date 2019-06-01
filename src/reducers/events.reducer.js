const initialState = {
  events: [],
  isLoading: true,
  error: false
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENTS_STARTED':
      return {
        ...state
      };
    case 'GET_EVENTS_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        events: action.payload
      };
    case 'GET_EVENTS_ERRORED':
      return {
        ...initialState,
        isLoading: false,
        error: true
      };
    default:
      return initialState;
  }
};

export default eventsReducer;