import React, { Component } from 'react';
import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import { getConferences } from "../actions/actions";

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

const mapDispatchToProps = {
  getConferences
};

class HomePageCtn extends Component {
	componentDidMount() {
		this.props.getConferences();
	}

	render() {
		return <HomePage events={this.props.events} />
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageCtn);
