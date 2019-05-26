import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header';

const HomePage = () =>
  <Container maxWidth="md">
    <Header buttonText="Submit Conference" path="/submit-conference" />
    <h1>Home Page</h1>
  </Container>;

export default HomePage;
