export const getEventsStarted = () => ({
  type: 'GET_EVENTS_STARTED'
});

export const getEventsSucceeded = payload => ({
  type: 'GET_EVENTS_SUCCEEDED',
  payload
});

export const getEventsErrored = () => ({
  type: 'GET_EVENTS_ERRORED'
});

export const getEventDetailsStarted = () => ({
  type: 'GET_EVENT_DETAILS_STARTED'
});

export const getEventDetailsSucceeded = payload => ({
  type: 'GET_EVENT_DETAILS_SUCCEEDED',
  payload
});

export const getEventDetailsErrored = () => ({
  type: 'GET_EVENT_DETAILS_ERRORED'
});

export const createEventStarted = () => ({
  type: 'CREATE_EVENT_STARTED'
});

export const createEventSucceeded = payload => ({
  type: 'CREATE_EVENT_SUCCEEDED',
  payload
});

export const createEventErrored = () => ({
  type: 'CREATE_EVENT_ERRORED'
});

export const fetchEvents = () => {
  return (dispatch) => {
    dispatch(getEventsStarted());
    fetch(`http://speakeasier-backend.bridgeschoolapp.io/conferences`)
      .then(res => !res.ok ? Promise.reject('Something went wrong :(') : res.json())
      .then(events => {
        dispatch(getEventsSucceeded(events.data));
      })
      .catch(() => dispatch(getEventsErrored()));
  };
};

export const fetchEventDetails = (id) => {
  return (dispatch) => {
    dispatch(getEventDetailsStarted());
    fetch(`http://speakeasier-backend.bridgeschoolapp.io/conferences/${id}`)
      .then(res => !res.ok ? Promise.reject('Something went wrong :(') : res.json())
      .then(event => {
        dispatch(getEventDetailsSucceeded(event));
      })
      .catch(() => dispatch(getEventDetailsErrored()));
  };
};

export const addEvent = formData => {
  return (dispatch) => {
    dispatch(createEventStarted());
    return fetch(`http://speakeasier-backend.bridgeschoolapp.io/conferences`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => !res.ok ? Promise.reject('Something went wrong :(') : res.json())
      .then(event => {
        dispatch(createEventSucceeded(event));
      })
      .catch(err => {
        console.log(err);
        dispatch(createEventErrored(err));
      });
  };
};

export const queryForEvents = payload => ({
  type: 'QUERY_FOR_EVENTS',
  payload
});
