import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';
import Form from './Form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
}));

const FormPage = () => {
  const classes = useStyles();

  return (
    <>
      <Header buttonText="Back To Conferences" path="/"/>
      <Container maxWidth="md">
        <h1 className={classes.title}>Submit an event</h1>
        <Box p={4} flexGrow={1} textAlign="center" className={classes.body}>
          <Form/>
        </Box>
      </Container>
    </>
  );
}


export default FormPage;
