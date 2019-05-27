import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Moment from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    columnGap: '100px',
    rowGap: '25px'
  },
  inputField: {
    flex: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: 30
  },
  divider: {
    gridColumn: 'span 2'
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
      <form className={classes.root}>
        <TextField
          id="standard-name"
          label="Event Name"
          placeholder="Name of my event"
          className={classes.inputField}
          value={eventName}
          onChange={handleInputFieldChange(setEventName)}
        />
        <TextField
          id="standard-name"
          label="Event Link"
          placeholder="Link to my event"
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
        <TextField
          id="standard-name"
          label="Event Location (Joanna)"
          placeholder="Location of my event"
          className={classes.inputField}
        />
        <Divider className={classes.divider}/>
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
          label="Submission Link"
          placeholder="Link to my Submission Page"
          className={classes.inputField}
        />
        <Divider className={classes.divider}/>
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
        <Divider className={classes.divider}/>
      </form>
    </div>
  );
};

export default Form;
