import { connect } from 'react-redux';
import Form from '../components/Form';
import { addEvent } from '../actions/events.actions';

const mapDispatchToProps = {
  addEvent: addEvent
};

const FormCtn = connect(
  null,
  mapDispatchToProps
)(Form);

export default FormCtn;
