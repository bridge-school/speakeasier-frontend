import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';
import Form from './Form';

const FormPage = () => (
  <>
    <Header buttonText="Back To Conferences" path="/"/>
    <Container maxWidth="md">
      <Box my={4} flexGrow={1} textAlign="center">
        <h1>Conference Submission Form</h1>
        <Form/>
      </Box>
    </Container>
  </>
);

export default FormPage;
