import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const FormPage = () =>
  <Container maxWidth="md">
    <Box my={4} display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h4" component="h1" gutterBottom>
        <Box fontFamily="Monospace">
          CONFERENCE FORM
        </Box>
      </Typography>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/"
      >
        Back To Conferences
      </Button>
    </Box>
  </Container>


export default FormPage;
