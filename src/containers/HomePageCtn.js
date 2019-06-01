import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { fetchEvents } from '../actions/events.actions';

function mapStateToProps (state) {
  return {
    isLoading: state.eventsState.isLoading,
    events: state.eventsState.events,
    error: state.eventsState.error
  };
}

const mapDispatchToProps = {
  getEvents: fetchEvents
};

const HomePageCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageCtn;
