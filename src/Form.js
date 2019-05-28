import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Moment from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';
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
    marginBottom: 30,
	width: '100%'
  },
  divider: {
    gridColumn: 'span 2'
  },
  autocomplete: {
	  flex: 1,
	  position: 'relative',
	  marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
	  width: '100%',
	  '& TextField': {
		  flex: 1,
	      marginLeft: theme.spacing(1),
	      marginRight: theme.spacing(1),
	      marginBottom: 30,
	  	  width: '100%',
	  },
	  '& div':{
		  position: 'relative',
		  width: '100%'
	  },
	  '& ul': {
		  position: 'absolute',
		  background: 'white',
		  zIndex: 5,
		  top: '65%',
		  boxShadow: '0px 5px 9px -4px rgba(0,0,0,0.38)'
	  },
	  '& p': {
		  position: 'absolute',
		 background: 'white',
		 zIndex: 5,
		 top: '75%',
	  }
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
        placeholder="Event Name"
        className={classes.inputField}
      />
      <TextField
        id="standard-name"
        label="Event Website"
        placeholder="Event Website"
        className={classes.inputField}
      />
      <MuiPickersUtilsProvider utils={Moment}>
        <DatePicker
          className={classes.inputField}
          label="Event Date"
          value={selectedEventDate}
          onChange={onEventDateChange}/>
      </MuiPickersUtilsProvider>

	  <GooglePlacesAutocomplete
		  id="standard-name"
		  label="Event Location"
		  className={classes.autocomplete}
	  />

      <Divider className={classes.divider}/>
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
        label="Submission Website"
        placeholder="Submission Website"
        className={classes.inputField}
      />
      <Divider className={classes.divider}/>
      <TextField
        id="standard-name"
        label="Contact Name"
        placeholder="Contact Name"
        className={classes.inputField}
      />
      <TextField
        id="standard-name"
        label="Contact E-mail"
        placeholder="Contact Email"
        className={classes.inputField}
      />
      <Divider className={classes.divider}/>
    </form>
  );
};

export default Form;
