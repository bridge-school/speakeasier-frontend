import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Moment from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  inputField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
    marginTop: 20
  }
}));

const Form = () => {
  const classes = useStyles();
  const [eventName, setEventName] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [submissionDate, setSubmissionDate] = useState(new Date());
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const handleDateChange = setDate => date => {
    setDate(date);
  };
  const handleInputFieldChange = setValue => event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <p>Event Details: {eventName} {eventLink}</p>
      <p>Event Date: {eventDate.toString()}</p>
      <p>Submission Date: {submissionDate.toString()}</p>
      <p>Contact Info: {contactName} {contactEmail}</p>
      <form>
        <TextField
          id="standard-name"
          label="Event Name"
          placeholder="My Event Name"
          className={classes.inputField}
          value={eventName}
          onChange={handleInputFieldChange(setEventName)}
        />
        <TextField
          id="standard-name"
          label="Event Link"
          placeholder="My Event Website"
          className={classes.inputField}
          value={eventLink}
          onChange={handleInputFieldChange(setEventLink)}
        />
        <MuiPickersUtilsProvider utils={Moment}>
          <DatePicker
            className={classes.inputField}
            label="Event Date"
            value={eventDate}
            onChange={handleDateChange(setEventDate)}/>
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={Moment}>
          <DatePicker
            className={classes.inputField}
            label="Submission Date"
            value={submissionDate}
            onChange={handleDateChange(setSubmissionDate)}
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="standard-name"
          label="Contact Name"
          placeholder="My Name"
          className={classes.inputField}
          value={contactName}
          onChange={handleInputFieldChange(setContactName)}
        />
        <TextField
          id="standard-name"
          label="Contact E-mail"
          placeholder="My E-mail"
          className={classes.inputField}
          value={contactEmail}
          onChange={handleInputFieldChange(setContactEmail)}
        />
      </form>
    </div>
  );
};

export default Form;
