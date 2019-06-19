import React, { useEffect } from 'react';
import Header from '../Header';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
});

const EventDetailsPage = ({ match, getEventDetails, event }) => {
    const eventId = match.params.id;

    useEffect(() => {
        getEventDetails(eventId);
    }, [getEventDetails]);

    const classes = useStyles();

    return (
        <div>
            <Header buttonText="Submit Conference" path="/submit-conference" />
            <Container maxWidth="md">
                <Box flexGrow={1} textAlign="center" className={classes.box}>
                    <h1>Event Name: {event.eventName}</h1>
                    <h1>Event Date: {event.eventDate}</h1>
                    <h1>Event Website: {event.eventWebsite}</h1>
                    <h1>Event Location: {event.location}</h1>
                    <h1>Submission Date: {event.submissionDate}</h1>
                    <h1>Submission Website: {event.submissionWebsite}</h1>
                    <h1>Scholarships: {event.scholarships}</h1>
                    <h1>COC: {event.coc}</h1>
                    <h1>Compensation: {event.compensation}</h1>
                    <h1>Contact Name: {event.contactName}</h1>
                    <h1>Contact Email: {event.contactEmail}</h1>
                </Box>
            </Container>
        </div>
    );
};

export default EventDetailsPage;
