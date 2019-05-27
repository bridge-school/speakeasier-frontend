import React, { Component } from 'react';

import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByPlaceId } from 'react-places-autocomplete';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const gmapsApi = `AIzaSyCNGK9oXaPsMZFDfz-h_74IR1-qpnYxo5I`;

class GooglePlacesAutocomplete extends Component {

	constructor(props) {
		super(props);
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


	initMap = () => {
		this.setState({ gmapsLoaded: true });
	}

	handleError = (status, clearSuggestions) => {
	  console.log('Google Maps API returned error with status: ', status);
	  clearSuggestions();
	}

	componentDidMount() {
		window.initMap = this.initMap;

		const gmapScriptEl = document.createElement(`script`)
		gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${gmapsApi}&libraries=places&callback=initMap`;

		document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl);
	}

	render() {

		return (
			<div>
			{this.state.gmapsLoaded &&
				<PlacesAutocomplete
					value={this.state.address}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
					onError={this.handleError}
					googleCallbackName="initMap"
				>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div>
							<InputLabel>
								Event Location
							</InputLabel>

							<Input
								{...getInputProps({
									placeholder: ''
								})}
							/>

							{loading && <p>Loading...</p>}

							{(!loading && suggestions.length > 0) &&
								<List>
									{suggestions.map(suggestion => {
										return (
											<ListItem button
											{...getSuggestionItemProps(suggestion)}
											>
											  <ListItemText primary={suggestion.description} />
											</ListItem>
										);
									})}
								</List>
							}
						</div>
					)}
				</PlacesAutocomplete>
			}
			</div>
		)
	}
}

export default GooglePlacesAutocomplete;
