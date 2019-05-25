import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Form from './Form';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import HomePage from './HomePage';


import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={HomePage}/>
				<Route path="/submit-conference" component={Form}/>
			</Router>
		)
	}
}

export default App;