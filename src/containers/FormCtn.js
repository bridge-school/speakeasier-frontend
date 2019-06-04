import { connect } from 'react-redux';
import Form from '../components/Form';
import { addEvent } from '../actions/events.actions';

const mapStateToProps = state => ({
  isLoading: state.eventsState.isLoading
})

const mapDispatchToProps = {
  addEvent: addEvent
};

const FormCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormCtn;
