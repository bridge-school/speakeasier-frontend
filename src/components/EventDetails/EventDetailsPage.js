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
                    <h1 className={classes.title}>Conference: {event.eventName}</h1>
                </Box>
            </Container>
        </div>
    );
};

export default EventDetailsPage;
