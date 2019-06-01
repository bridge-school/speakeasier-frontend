const initialState = {
  event: null
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_EVENT':
      return {
        ...state,
        event: action.payload
      };
    default:
      return initialState;
  }
};

export default formReducer;
