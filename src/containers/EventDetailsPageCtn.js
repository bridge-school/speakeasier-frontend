import { connect } from 'react-redux';
import EventDetailsPage from '../components/EventDetails/EventDetailsPage';
import { fetchEventDetails } from '../actions/events.actions';

function mapStateToProps (state) {
  return {
    isLoading: state.eventsState.isLoading,
    event: state.eventsState.event,
    error: state.eventsState.error
  };
}

const mapDispatchToProps = {
  getEventDetails: fetchEventDetails
};

const EventDetailsPageCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsPage);

export default EventDetailsPageCtn;
