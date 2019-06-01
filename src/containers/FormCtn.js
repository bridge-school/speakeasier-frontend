import { connect } from 'react-redux';
import Form from '../components/Form';
import { submitEvent } from '../actions/form.actions';

function mapStateToProps (state) {
  return {
    event: state.formState.event
  };
}

const mapDispatchToProps = {
  submitEvent
};

const FormCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormCtn;
