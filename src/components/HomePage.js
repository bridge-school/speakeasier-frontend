import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './Header';
import EventList from './EventList';

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
          <EventList events={events}/>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
