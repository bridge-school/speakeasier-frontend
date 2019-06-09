import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './Header';
import EventList from "./EventList";
import SearchBar from './SearchBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  box: {
    marginBottom: '80px'
  },
  title: {
    fontWeight: '300',
    color: '#181818',
    display: 'flex',
    justifyContent: 'left',
    margin: '10px'
  }
}));

const HomePage = ({ events, isLoading, error, getEvents, queryForEvents, searchQuery }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const classes = useStyles();

  return (
    <div>
      <Header buttonText="Submit Conference" path="/submit-conference" />
      <Container maxWidth="md">
        <Box flexGrow={1} textAlign="center" className={classes.box}>
          <h1 className={classes.title}>Upcoming events</h1>
					<SearchBar queryForEvents={queryForEvents} />
          {isLoading && <LinearProgress />}
          {error && <div>Unable to fetch events. Please try again</div>}
          <EventList events={events} searchQuery={searchQuery} />
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
