const initialState = {
  name: ''
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENT_NAME':
      return {
        ...state,
        name: action.payload
      };
    case 'SUBMIT_EVENT':
      return {
        ...state,
        name: action.payload
      };
    default:
      return initialState;
  }
};

export default formReducer;
