import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const EventListItem = ({ event }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper} key={event.id}>{event.eventName}</Paper>
      </Grid>
    </Grid>
  );
};

export default EventListItem;