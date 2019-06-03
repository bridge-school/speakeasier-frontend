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
    dispatch(createEventStarted());
    return fetch(`http://localhost:8081/conferences`, {
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
        console.log(err)
        dispatch(createEventErrored(err))
      });
  };
};
