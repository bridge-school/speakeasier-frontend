const initialState = {
  events: [],
  isLoading: false,
  error: false
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENTS_STARTED':
    case 'CREATE_EVENT_STARTED':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_EVENTS_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        events: action.payload
      };

    case 'CREATE_EVENT_ERRORED':
    case 'GET_EVENTS_ERRORED':
      return {
        ...initialState,
        isLoading: false,
        error: true
      };

    case 'CREATE_EVENT_SUCCEEDED':
      return {
        ...initialState,
        events: [action.payload, ...state.events]
      };
    default:
      return initialState;
  }
};

export default eventsReducer;
