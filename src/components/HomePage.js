import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';

const HomePage = ({ events, getConferences }) => {

  useEffect(() => {
    getConferences();
  }, [getConferences]);

  return (
    <>
      <Header buttonText="Submit Conference" path="/submit-conference"/>
      <Container maxWidth="md">
        <Box flexGrow={1} textAlign="center">
          <h1>Home Page</h1>
          <p>{events.length > 0 && events.map(event => event.name)}</p>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
