import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './Header';

const HomePage = ({ events, isLoading, error, getEvents }) => {

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div>
      <Header buttonText="Submit Conference" path="/submit-conference"/>
      <Container maxWidth="md">
        <Box flexGrow={1} textAlign="center">
          <h1>Home Page</h1>
          {isLoading && <LinearProgress/>}
          {error && <div>Unable to fetch events. Please try again</div>}
          <ul>
            {events.map(event => <li key={event.id}>{event.eventName}</li>)}
          </ul>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
