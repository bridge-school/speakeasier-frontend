import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


import './App.css';

class App extends Component {
	render() {
		return (
			<Container maxWidth="sm">
				<Box my={4} display="flex" justifyContent="space-between" alignItems="center">
					<Typography variant="h4" component="h1" gutterBottom>
						Speak Easy
					</Typography>

					<Button color="primary" variant="contained">
				        Submit Conference
				    </Button>
				</Box>


			</Container>
		);
	}
}

export default App;
