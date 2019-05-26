import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Moment from '@date-io/moment';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const FormPage = () => {
  const [selectedEventDate, setEventDate] = useState(new Date());
  const [selectedSubmissionDate, setSubmissionDate] = useState(new Date());

  const onEventDateChange = (date) => {
    setEventDate(date)
  }

  const onSubmissionDateChange = (date) => {
    setSubmissionDate(date)
  }

  return (
    <Container maxWidth="md">
      <Box my={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>
          <Box fontFamily="Monospace">
            CONFERENCE FORM
          </Box>
        </Typography>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/"
        >
          Back To Conferences
        </Button>
      </Box>

      <MuiPickersUtilsProvider utils={Moment}>
        <h4>Event Date</h4>
        <DatePicker value={selectedEventDate} onChange={onEventDateChange} />
      </MuiPickersUtilsProvider>

      <MuiPickersUtilsProvider utils={Moment}>
        <h4>Submission Date</h4>
        <DatePicker value={selectedSubmissionDate} onChange={onSubmissionDateChange} />
      </MuiPickersUtilsProvider>
    </Container>
  )
}


export default FormPage;
