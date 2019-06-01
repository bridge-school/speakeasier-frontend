import { connect } from 'react-redux';
import Form from '../components/Form';
import { postEvent } from '../actions/form.actions';

const mapDispatchToProps = {
  submitEvent: postEvent
};

const FormCtn = connect(
  null,
  mapDispatchToProps
)(Form);

export default FormCtn;
