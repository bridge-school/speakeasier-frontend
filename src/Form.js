import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Moment from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';

const Form = () => {
  const [selectedEventDate, setEventDate] = useState(new Date());
  const [selectedSubmissionDate, setSubmissionDate] = useState(new Date());

  const onEventDateChange = date => {
    setEventDate(date);
  };

  const onSubmissionDateChange = date => {
    setSubmissionDate(date);
  };

  return (
    <Container>
	 <GooglePlacesAutocomplete />
      <MuiPickersUtilsProvider utils={Moment}>
        <h4>Event Date</h4>
        <DatePicker value={selectedEventDate} onChange={onEventDateChange} />
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={Moment}>
        <h4>Submission Date</h4>
        <DatePicker
          value={selectedSubmissionDate}
          onChange={onSubmissionDateChange}
        />
      </MuiPickersUtilsProvider>
    </Container>
  );
};

export default Form;
