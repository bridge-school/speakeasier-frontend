import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import Header from "./Header";
import EventList from "./EventList";
import SearchBar from './SearchBar';

const HomePage = ({ events, isLoading, error, getEvents, queryForEvents, searchQuery }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div>
      <Header buttonText="Submit Conference" path="/submit-conference" />
      <Container maxWidth="md">
        <Box flexGrow={1} textAlign="center">
          {isLoading && <LinearProgress />}
          {error && <div>Unable to fetch events. Please try again</div>}
					<SearchBar queryForEvents={queryForEvents} />
          <EventList events={events} searchQuery={searchQuery} />
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
