import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCheckSquare, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Typography from '@material-ui/core/Typography';
import cx from 'classnames';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 768px)': {
      flexDirection: 'row'
    }
  },
  main: {
    flex: '1 0',
    textAlign: 'left',
    lineHeight: '1.5',
    color: '#8C8C95',
    padding: '25px'
  },
  aside: {
    width: '100%', 
    textAlign: 'left',
    padding: '25px',
    color: '#8C8C95',
    '@media (min-width: 768px)': {
      width: '250px'
    }
  },
  subtitle: {
    color: 'black'
  },
  details: {
    marginBottom: '40px'
  },
  extras: {
    padding: '20px 0 0'
  },
  strike: {
    textDecoration: 'line-through',
    color: '#8C8C95 !important'
  },
  icon : {
    marginRight: '10px',
    color: '#4A4A53'
  },
  extrasMargin: {
    marginBottom: '15px'
  }
});

const EventDetails = ({ event }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <p className={classes.subtitle}>Description</p>
        {event.eventDescription}
      </div>

      <div className={classes.aside}>
        <p className={classes.subtitle}>Event Date</p>
        <div className={classes.details}>
          {moment.unix(event.eventDate).format('dddd, DD MMMM YYYY')}
        </div>

        <p className={classes.subtitle}>Event website</p>
        <div className={classes.details}>
          <a href={event.eventWebsite}>{event.eventWebsite}</a>
        </div>

        <p className={classes.subtitle}>Location</p>
        <div className={classes.details}>
          {event.location}
        </div>

        <p className={classes.subtitle}>Submission Date</p>
        <div className={classes.details}>
          {moment.unix(event.submissionDate).format('dddd, DD MMMM YYYY')}
        </div>

        <p className={classes.subtitle}>Submission website</p>
        <div className={classes.details}>
          <a href={event.submissionWebsite}>{event.submissionWebsite}</a>
        </div>

        <div className={classes.extrasMargin}>
          <Typography variant="inherit" color="textPrimary" gutterBottom>
            <Icon icon={faDollarSign} className={classes.icon} />
            <span className={cx(classes.extraText, { [classes.strike]: event.compensation === 'no' })}>Compensation</span>
          </Typography>
        </div>

        <div className={classes.extrasMargin}>
          <Typography variant="inherit" color="textPrimary" gutterBottom>
            <Icon icon={faCheckSquare} className={classes.icon} />
            <span className={cx(classes.extraText, { [classes.strike]: event.coc === 'no' })}>Code of conduct</span>
          </Typography>
        </div>

        <div className={classes.extrasMargin}>
          <Typography variant="inherit" color="textPrimary" gutterBottom>
            <Icon icon={faGraduationCap} className={classes.icon} />
            <span className={cx(classes.extraText, { [classes.strike]: event.scholarships === 'no'})}>Diversity Scholarships</span>
          </Typography>
        </div>

      </div>
    </div>
  );
}

export default EventDetails;
