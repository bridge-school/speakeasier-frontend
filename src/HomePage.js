import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render () {
    return (
      <Container maxWidth="md">
        <Box my={4} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" component="h1" gutterBottom>
            <Box fontFamily="Monospace">
              Speak Easier
            </Box>
          </Typography>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/submit-conference"
          >
            Submit Conference
          </Button>
        </Box>
      </Container>
    );
  }
}

export default HomePage;
