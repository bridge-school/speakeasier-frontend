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
import { withRouter } from 'react-router-dom';

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
  },
  submitButton: {
    marginTop: '30px'
  },
  alignLeft: {
    textAlign: 'left'
  }
}));

const Form = ({ history, submitEvent }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    eventName: '',
    eventWebsite: '',
    eventDate: new Date(),
    location: '',
    submissionDate: new Date(),
    submissionWebsite: '',
    compensation: null,
    coc: null,
    scholarships: null,
    contactName: '',
    contactEmail: ''
  });

  const handleChange = event => setFormData({
    ...formData,
    [event.target.name]: event.target.value
  });

  const handleDateChange = name => date => setFormData({
    ...formData,
    [name]: date
  });

  const handleSetLocation = address => setFormData({
    ...formData,
    location: address
  });

  const onSubmit = event => {
    event.preventDefault();

    submitEvent({
      ...formData,
      eventDate: formData.eventDate.unix(),
      submissionDate: formData.submissionDate.unix()
    })
    .then(() => {
      history.push('/')
    })

  }

  return (
    <form className={classes.alignLeft} onSubmit={onSubmit}>
      <div className={classes.root}>
        <TextField
          id="standard-name"
          label="Event Name"
          placeholder="Event Name"
          name="eventName"
          value={formData.eventName}
          className={classes.inputField}
          onChange={handleChange}
        />
        <TextField
          id="standard-name"
          label="Event Website"
          placeholder="Event Website"
          name="eventWebsite"
          onChange={handleChange}
          value={formData.eventWebsite}
          className={classes.inputField}
        />

        <MuiPickersUtilsProvider utils={Moment}>
          <DatePicker
            className={classes.inputField}
            label="Event Date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleDateChange('eventDate')} />
        </MuiPickersUtilsProvider>

        <EventLocationField
          id="standard-name"
          label="Event Location"
          name="location"
          value={formData.location}
          onChange={handleSetLocation}
          onSelect={handleSetLocation}
          className={classes.autocomplete}
        />

        <Divider className={classes.divider}/>

        <MuiPickersUtilsProvider utils={Moment}>
          <DatePicker
            className={classes.inputField}
            label="Submission Date"
            value={formData.submissionDate}
            onChange={handleDateChange('submissionDate')}
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="standard-name"
          label="Submission Website"
          placeholder="Submission Website"
          name="submissionWebsite"
          value={formData.submissionWebsite}
          onChange={handleChange}
          className={classes.inputField}
        />

        <FormControl component="fieldset" className={classes.radioField}>
          <FormLabel component="legend">Are speakers compensated at your event?</FormLabel>
          <RadioGroup
            aria-label="Are speakers compensated at your event?"
            name="compensation"
            checked={formData.compensation}
            onChange={handleChange}
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
            checked={formData.coc}
            onChange={handleChange}
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
            checked={formData.scholarships}
            onChange={handleChange}
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
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          className={classes.inputField}
        />
        <TextField
          id="standard-name"
          label="Contact E-mail"
          placeholder="Contact Email"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          className={classes.inputField}
        />
        <Divider className={classes.divider}/>
      </div>

      <Button
        color="primary"
        variant="contained"
        className={classes.submitButton}
        type="submit"
      >
        Submit Event
      </Button>
    </form>
  );
};

export default withRouter(Form);
