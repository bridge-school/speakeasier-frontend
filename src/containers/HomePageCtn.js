import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { fetchEvents } from '../actions/events.actions';

function mapStateToProps (state) {
  return {
    events: state.eventsState.events
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
