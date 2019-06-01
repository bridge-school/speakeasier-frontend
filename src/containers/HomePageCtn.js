import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import { getConferences } from "../actions/actions";

function mapStateToProps (state) {
  return {
    events: state.events
  };
}

const mapDispatchToProps = {
  getConferences
};

const HomePageCtn  = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageCtn;
