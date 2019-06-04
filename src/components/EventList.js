import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EventListItem from "./EventListItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const EventList = ({ events, test }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {events.map(event => (
        <EventListItem event={event} />
      ))}
    </div>
  );
};

export default EventList;
