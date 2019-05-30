const submitEvent = event => {
  event.preventDefault();

  return {
    type: "SUBMIT_EVENT"
  };
};

export default submitEvent;
