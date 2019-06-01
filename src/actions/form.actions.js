export const submitEvent = event => {
  event.preventDefault();

  return {
    type: 'SUBMIT_EVENT'
  };
};
