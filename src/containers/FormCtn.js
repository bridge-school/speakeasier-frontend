import { connect } from 'react-redux';
import Form from '../components/Form';
import { setEventName, postEvent } from '../actions/form.actions';

function mapStateToProps (state) {
  return {
    name: state.formState.name,
    formData: state.formState
  };
}

const mapDispatchToProps = {
  setEventName,
  submitEvent: postEvent
};

const FormCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormCtn;
