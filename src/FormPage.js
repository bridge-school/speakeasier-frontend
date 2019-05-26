import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';
import Form from './Form';

const FormPage = () => {
  return (
    <Container maxWidth="md">
      <Header buttonText="Back To Conferences" path="/"/>
      <Box my={4} flexGrow={1} textAlign="center">
        <h1>Conference Submission Form</h1>
        <Form/>
      </Box>
    </Container>
  );
};

export default FormPage;
