import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Moment from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import EventLocationField from './EventLocationField';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

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
  radioField: {
    gridColumn: 'span 2',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    '& Legend': {
      textAlign: 'left',
      marginBottom: 10,
      lineHeight: 1.3
    }
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
      width: '100%'
    },
    '& div': {
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
      top: '75%'
    }
  }
}));

const SubmissionForm = () => {
  const classes = useStyles();
  const [selectedEventDate, setEventDate] = useState(new Date());
  const [selectedSubmissionDate, setSubmissionDate] = useState(new Date());

  const handleEventDateChange = date => {
    setEventDate(date);
  };

  const handleSubmissionDateChange = date => {
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
          onChange={handleEventDateChange}/>
      </MuiPickersUtilsProvider>

      <EventLocationField
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
          onChange={handleSubmissionDateChange}
        />
      </MuiPickersUtilsProvider>
      <TextField
        id="standard-name"
        label="Submission Website"
        placeholder="Submission Website"
        className={classes.inputField}
      />

      <Divider className={classes.divider}/>

      <FormControl component="fieldset" className={classes.radioField}>
        <FormLabel component="legend">Are speakers compensated at your event?</FormLabel>
        <RadioGroup
          aria-label="Are speakers compensated at your event?"
          name="compensation"
        >
          <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Yes"/>
          <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"/>
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.radioField}>
        <FormLabel component="legend">Does your event have a publicly visible code of conduct?</FormLabel>
        <RadioGroup
          aria-label="Does your event have a publicly visible code of conduct?"
          name="coc"
        >
          <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Yes"/>
          <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"/>
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.radioField}>
        <FormLabel component="legend">Does your event provide diversity scholarships?</FormLabel>

        <RadioGroup
          aria-label="Does your event provide diversity scholarships?"
          name="scholarships"
        >
          <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Yes"/>
          <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"/>
        </RadioGroup>
      </FormControl>

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

      <Button
        color="primary"
        variant="contained"
      >
        Submit Event
      </Button>
    </form>
  );
};

export default SubmissionForm;
