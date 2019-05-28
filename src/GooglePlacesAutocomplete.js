import React, { Component } from 'react';

import PlacesAutocomplete from 'react-places-autocomplete';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import TextField from '@material-ui/core/TextField';


class GooglePlacesAutocomplete extends Component {
	constructor(props) {
		super(props);

		this.state = {
			address: '',
			errorStatus: ''
		};
	}

	handleChange = val => {
		//reset errorStatus to clear it from any previous sets
		this.setState({
			address: val,
			errorStatus: ''
		});
	}

	handleSelect = (address, placeId) => {
		this.setState({
			address
		});
	};

	handleError = (status, clearSuggestions) => {
	  //place to handle errors from the Maps API e.g. no results found
	  //setting a generic error indicator on the TextField, but can be
	  //expanded to be more descriptive if desired

	  this.setState({
		  errorStatus: status
	  });

	  clearSuggestions();
	}

	render() {
		const { className, label, id } = this.props;
		const { errorStatus } = this.state;

		return (
			<PlacesAutocomplete
				value={this.state.address}
				onChange={this.handleChange}
				onSelect={this.handleSelect}
				onError={this.handleError}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<TextField
						  id={id}
						  label={label}
						  className={className}
						  {...getInputProps()}
						  error={errorStatus !== ''}
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
		)
	}
}

export default GooglePlacesAutocomplete;
