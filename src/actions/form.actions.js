export const submitEvent = payload => ({
  type: 'SUBMIT_EVENT',
  payload
});

export const postEvent = formData => {
  return (dispatch) => {
    return fetch(`http://speakeasier-backend.bridgeschoolapp.io/conferences`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => !res.ok ? Promise.reject('Something went wrong :(') : res.json())
      .then(event => {
        dispatch(submitEvent(event));
      })
      .catch(err => console.log(err));
  };
};
