const initialState = {
  events: []
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return {
        ...state,
        events: action.payload
      };
    default:
      return initialState;
  }
};

export default eventsReducer;
