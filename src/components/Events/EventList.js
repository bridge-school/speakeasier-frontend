import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EventListItem from "./EventListItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const EventList = ({ events, test, searchQuery }) => {
  const classes = useStyles();

	const filteredEvents = events.filter(event => event.eventName.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);

  return (
    <div className={classes.root}>
      {filteredEvents.map(event => (
        <EventListItem event={event} key={event.id}/>
      ))}
			{filteredEvents.length === 0 && <p>No events found.</p>}
    </div>
  );
};

export default EventList;
