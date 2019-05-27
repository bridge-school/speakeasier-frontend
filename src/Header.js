import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#FFF',
    borderBottom: '1px solid #D9DCEF',
    marginBottom: '30px'
  }
}));

const Header = ({ path, buttonText }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container>
        <Box py={4} display="flex" justifyContent="space-between">
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
      </Container>
    </header>
  );
}

export default Header;
