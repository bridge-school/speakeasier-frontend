export const getEvents = payload => ({
  type: 'GET_EVENTS',
  payload
});

export const fetchEvents = () => {
  return (dispatch) => {
    fetch(`http://speakeasier-backend.bridgeschoolapp.io/conferences`)
      .then(res => !res.ok ? Promise.reject('Something went wrong :(') : res.json())
      .then(events => {
        dispatch(getEvents(events.data));
      })
      .catch(err => {
        console.log(err);
        console.log('not working');
      });
  };
};
