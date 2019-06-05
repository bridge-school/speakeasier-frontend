import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { fetchEvents, queryForEvents } from '../actions/events.actions';

function mapStateToProps (state) {
  return {
    isLoading: state.eventsState.isLoading,
    events: state.eventsState.events,
    error: state.eventsState.error,
		searchQuery: state.eventsState.searchQuery
  };
}

const mapDispatchToProps = {
  getEvents: fetchEvents,
	queryForEvents
};

const HomePageCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageCtn;
