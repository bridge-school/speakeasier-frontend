import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Moment from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  inputField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
    marginTop: 20
  }
}));

const Form = () => {
  const classes = useStyles();
  const [selectedEventDate, setEventDate] = useState(new Date());
  const [selectedSubmissionDate, setSubmissionDate] = useState(new Date());

  const onEventDateChange = date => {
    setEventDate(date);
  };

  const onSubmissionDateChange = date => {
    setSubmissionDate(date);
  };

  return (
    <form className={classes.root}>
      <TextField
        id="standard-name"
        label="Event Name"
        defaultValue="My Event Name"
        className={classes.inputField}
      />
      <TextField
        id="standard-name"
        label="Event Link"
        defaultValue="My Event Website"
        className={classes.inputField}
      />
      <MuiPickersUtilsProvider utils={Moment}>
        <DatePicker
          className={classes.inputField}
          label="Event Date"
          value={selectedEventDate}
          onChange={onEventDateChange}/>
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={Moment}>
        <DatePicker
          className={classes.inputField}
          label="Submission Date"
          value={selectedSubmissionDate}
          onChange={onSubmissionDateChange}
        />
      </MuiPickersUtilsProvider>
      <TextField
        id="standard-name"
        label="Contact Name"
        defaultValue="My Name"
        className={classes.inputField}
      />
      <TextField
        id="standard-name"
        label="Contact E-mail"
        defaultValue="My E-mail"
        className={classes.inputField}
      />
    </form>
  );
};

export default Form;
