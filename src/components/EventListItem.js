import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  title: {
    color: "#3f51b5",
    fontSize: "1.2rem"
  },
  submissionDate: {
    textAlign: "right"
  },
  eventDate: {
    paddingRight: "5px"
  },
  extras: {
    padding: "20px 0 0"
  }
}));

const EventListItem = ({ event }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} key={event.id}>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="h2"
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {event.eventName}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.submissionDate}>
            <Typography color="textPrimary">
              {moment.unix(event.submissionDate).format("ll")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="p"
              color="textSecondary"
              gutterBottom
              className={classes.eventDate}
            >
              {moment.unix(event.eventDate).format("ll")}
            </Typography>
            <Typography variant="p" color="textSecondary" gutterBottom>
              - {event.location}
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.extras}>
          <Grid item xs={4}>
            <Typography variant="p" color="textPrimary" gutterBottom>
              Compensation: {event.compensation}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="p" color="textPrimary" gutterBottom>
              Code of conduct: {event.coc}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="p" color="textPrimary" gutterBottom>
              Diversity scholarships: {event.scholarships}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EventListItem;