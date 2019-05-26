import React, { Component } from 'react';

import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

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
		this.setState({ address: val })
	}

	handleSelect = address => {
		this.setState({address})
		// geocodeByAddress(address)
		// .then(results => getLatLng(results[0]))
		// .then(latLng => console.log('Success', latLng))
		// .catch(error => console.error('Error', error));
	};


	initMap = () => {
		this.setState({ gmapsLoaded: true });
	}

	handleError = (status, clearSuggestions) => {
	  console.log('Google Maps API returned error with status: ', status);
	  clearSuggestions();
	}

	componentDidMount() {
		window.initMap = this.initMap
		const gmapScriptEl = document.createElement(`script`)
		gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${gmapsApi}&libraries=places&callback=initMap`
		document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
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

							{loading && <div>Loading...</div>}

							<List>

							{suggestions.map(suggestion => {
								return (

									<div
									{...getSuggestionItemProps(suggestion)}
									>
										<ListItem button>
										  <ListItemText primary={suggestion.description} />
										</ListItem>
									</div>
								);
							})}
							</List>
						</div>
					)}
				</PlacesAutocomplete>
			}

			</div>
		)
	}
}

export default GooglePlacesAutocomplete;
