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
