import React, { Component } from 'react';

import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByPlaceId } from 'react-places-autocomplete';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class GooglePlacesAutocomplete extends Component {

	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			address: '',
			gmapsLoaded: false
		};
	}

	handleChange = val => {
		this.setState({ address: val });
	}

	handleSelect = (address, placeId) => {
		this.setState({ address });
	};

	handleError = (status, clearSuggestions) => {
	  console.log('Google Maps API returned error with status: ', status);
	  clearSuggestions();
	}



	}

	render() {

		return (
											{...getSuggestionItemProps(suggestion)}
		)
	}
}

export default GooglePlacesAutocomplete;
