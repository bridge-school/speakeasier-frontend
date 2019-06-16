import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EventListItem from "./EventListItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  linkStyle: {
    textDecoration: "none"
  }
});

const EventList = ({ events, searchQuery }) => {
  const classes = useStyles();

	const filteredEvents = events.filter(event => event.eventName.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);

  return (
    <div className={classes.root}>
        {filteredEvents.map(event => (
          <Link to={"/conference/" + event.id} key={event.id} className={classes.linkStyle}>
             <EventListItem event={event}/>
          </Link>
        ))}
      
      {filteredEvents.length === 0 && <p>No events found.</p>}
  
    </div>
  );
};

export default EventList;
