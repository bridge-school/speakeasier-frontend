import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import FormPage from './FormPage';
import HomePage from './HomePage';

class App extends Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={HomePage}/>
				<Route path="/submit-conference" component={FormPage}/>
			</Router>
		)
	}
}

export default App;
