export const submitEvent = event => {
  event.preventDefault();

  return {
    type: "SUBMIT_EVENT"
  };
};

export const setConferences = payload => ({
	type: "GET_EVENTS",
	payload
})

export const getConferences = (...args) => {
	return (dispatch) => {
		fetch(`http://speakeasier-backend.bridgeschoolapp.io/conferences`)
		.then(res => !res.ok ? Promise.reject("Something went wrong :(") : res.json())
		.then(events => {
			dispatch(setConferences(events.data));
		})
		.catch(err => {
			console.log(err);
			console.log("not working");
		})
	}
}
