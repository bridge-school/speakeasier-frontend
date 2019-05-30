import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

const GooglePlacesAutocomplete = ({ className, label, id }) => {
  const [address, setAddress] = useState('');
  const [errorStatus, setErrorStatus] = useState('');

  const handleAddressChange = address => {
    setAddress(address);
  };

  const handleLocationError = (errorStatus, clearSuggestions) => {
    setErrorStatus(errorStatus);

    clearSuggestions();
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleAddressChange}
      onSelect={handleAddressChange}
      onError={handleLocationError}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={className}>
          <TextField
            id={id}
            label={label}
            error={errorStatus !== ''}
            {...getInputProps()}
          />

          {loading && <p>Loading...</p>}

          {(!loading && suggestions.length > 0) &&
          <List>
            {suggestions.map(suggestion => {
              return (
                <ListItem button
                          {...getSuggestionItemProps(suggestion)}
                >
                  <ListItemText primary={suggestion.description}/>
                </ListItem>
              );
            })}
          </List>
          }
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default GooglePlacesAutocomplete;
