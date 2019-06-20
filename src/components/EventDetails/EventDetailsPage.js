import React, { useEffect } from 'react';
import Header from '../Header';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import EventDetails from './EventDetails'

const useStyles = makeStyles({
  body: {
    backgroundColor: '#FFF',
    border: '1px solid #D9DCEF',
    borderRadius: '6px',
    minHeight: '600px'
  },
  title: {
    fontWeight: '300',
    color: '#181818'
  }
});

const EventDetailsPage = ({ match, getEventDetails, event }) => {
  const eventId = match.params.id;

  useEffect(() => {
    getEventDetails(eventId);
  }, [getEventDetails]);

  const classes = useStyles();

  return (
    <div>
      <Header buttonText="Home" path="/" />
        <Container maxWidth="md">
          <h1 className={classes.title}>{event.eventName}</h1>
          <Box p={4} flexGrow={1} textAlign="center" className={classes.body}>
            <EventDetails event={event}/>
          </Box>
        </Container>
  </div>
  );
};

export default EventDetailsPage;
