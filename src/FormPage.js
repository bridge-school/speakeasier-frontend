import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Moment from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Header from "./Header";

const FormPage = () => {
  const [selectedEventDate, setEventDate] = useState(new Date());
  const [selectedSubmissionDate, setSubmissionDate] = useState(new Date());

  const onEventDateChange = date => {
    setEventDate(date);
  };

  const onSubmissionDateChange = date => {
    setSubmissionDate(date);
  };

  return (
    <Container maxWidth="md">
      <Header buttonText="Back To Conferences" path="/" />
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

export default FormPage;
