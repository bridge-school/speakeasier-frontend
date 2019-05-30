import { connect } from "react-redux";
import Form from "../components/Form";
import submitEvents from "../actions/actions";

function mapStateToProps(state) {
  return {
    event: state.event
  };
}

const mapDispatchToProps = {
  submitEvents
};

const FormCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormCtn;