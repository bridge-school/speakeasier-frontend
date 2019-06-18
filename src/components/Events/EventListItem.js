import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCheckSquare, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginBottom: '20px'
  },
  content: {
    padding: '30px !important'
  },
  title: {
    color: '#3f51b5',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px;'
  },
  submissionDate: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    },
  },
  eventDate: {
    paddingRight: '5px'
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
  extraText: {
    color: '#4A4A53'
  },
  badge: {
    display: 'inline-block',
    borderRadius: '15px',
    padding: '3px 10px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    fontSize: 'small',
  },
  centerBadge: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      marginBottom: '10px'
    },
  }
}));


const EventListItem = ({ event }) => {
  const classes = useStyles();
  const now = new Date().getTime() / 1000;

  const closingSoon = event.submissionDate >= now && moment.unix(event.submissionDate).isBefore(moment().add(1, 'week'));

  return (
    <Card className={classes.card} key={event.id}>
      <CardContent className={classes.content}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h2"
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {event.eventName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.centerBadge}>
            {closingSoon &&
              <span className={classes.badge}>
                Submissions Closing Soon
              </span>
            }
          </Grid>
          <Grid item xs={12} sm={4} className={classes.submissionDate}>
            <Typography color="textPrimary">
              {moment.unix(event.submissionDate).format("ll")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="inherit"
              color="textSecondary"
              gutterBottom
              className={classes.eventDate}
            >
              {moment.unix(event.eventDate).format("ll")}
            </Typography>
            <Typography variant="inherit" color="textSecondary" gutterBottom>
              - {event.location}
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.extras}>
          <Grid item xs={12} sm={4}>
            <Typography variant="inherit" color="textPrimary" gutterBottom>
              <Icon icon={faDollarSign} className={classes.icon} />
              <span className={cx(classes.extraText, { [classes.strike]: event.compensation === 'no' })}>Compensation</span>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="inherit" color="textPrimary" gutterBottom>
              <Icon icon={faCheckSquare} className={classes.icon} />
              <span className={cx(classes.extraText, { [classes.strike]: event.coc === 'no' })}>Code of conduct</span>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="inherit" color="textPrimary" gutterBottom>
              <Icon icon={faGraduationCap} className={classes.icon} />
              <span className={cx(classes.extraText, { [classes.strike]: event.scholarships === 'no'})}>Diversity Scholarships</span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EventListItem;
