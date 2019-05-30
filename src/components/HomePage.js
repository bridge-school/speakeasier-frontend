import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';

const HomePage = () => (
  <>
    <Header buttonText="Submit Conference" path="/submit-conference" />
    <Container maxWidth="md">
      <Box flexGrow={1} textAlign="center">
        <h1>Home Page</h1>
      </Box>
    </Container>
  </>
);

export default HomePage;
