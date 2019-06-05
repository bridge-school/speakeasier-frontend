import React from "react";
import Box from "@material-ui/core/Box";
import EventList from "./EventList";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	wrapper: {
		margin: 10
	},
	inputField: {
    width: '100%',
		background: 'white',
  }
}));

const SearchBar = ({ queryForEvents }) => {
  const classes = useStyles();

	const handleOnChange = event => {
		queryForEvents(event.target.value);
	}

  return (
			<div className={classes.wrapper}>
				<TextField
					id="outlined-search"
					label="Search conference by name"
					type="search"
					className={classes.inputField}
					margin="normal"
					variant="outlined"
					onChange={handleOnChange}
				/>
			</div>
  );
};

export default SearchBar;
