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

export const createEvent = payload => ({
  type: 'CREATE_EVENT',
  payload
});

export const fetchEvents = () => {
  return (dispatch) => {
    dispatch(getEventsStarted());
    fetch(`http://localhost:8081/conferences`)
      .then(res => !res.ok ? Promise.reject('Something went wrong :(') : res.json())
      .then(events => {
        dispatch(getEventsSucceeded(events.data));
      })
      .catch(() => dispatch(getEventsErrored()));
  };
};

export const addEvent = formData => {
  return (dispatch) => {
    return fetch(`http://localhost:8081/conferences`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => !res.ok ? Promise.reject('Something went wrong :(') : res.json())
      .then(event => {
        dispatch(createEvent(event));
      })
      .catch(err => console.log(err));
  };
};
