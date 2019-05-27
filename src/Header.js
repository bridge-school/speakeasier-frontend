import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Header = ({ path, buttonText }) =>
  <Container>
    <Box my={4} display="flex" justifyContent="space-between">
      <Typography variant="h4" component="h1" gutterBottom>
        <Box fontFamily="Monospace">
          Speak Easier
        </Box>
      </Typography>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to={path}
      >
        {buttonText}
      </Button>
    </Box>
  </Container>;

export default Header;
