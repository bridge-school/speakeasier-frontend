import { connect } from "react-redux";
import Form from "../components/Form";
import { submitEvent } from "../actions/actions";

function mapStateToProps(state) {
  return {
    event: state.event
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
