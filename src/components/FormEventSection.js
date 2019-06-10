import React from "react";
import TextField from "@material-ui/core/TextField";
import Moment from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import EventLocationField from "./EventLocationField";

const EventSection = ({
  values,
  classes,
  inputOnChange,
  inputError,
  locationHandle,
  handleDateChange
}) => {
  return (
    <>
      <TextField
        id="standard-name"
        label="Event Name"
        placeholder="Event Name"
        name="eventName"
        value={values.eventName}
        className={classes.inputField}
        onChange={inputOnChange}
      />
      <TextField
        id="standard-name"
        label="Event Website"
        placeholder="Event Website"
        name="eventWebsite"
        onChange={inputOnChange}
        value={values.eventWebsite}
        className={classes.inputField}
        error={inputError.eventWebsiteError}
      />

      <MuiPickersUtilsProvider utils={Moment}>
        <DatePicker
          disablePast
          className={classes.inputField}
          label="Event Date"
          name="eventDate"
          value={values.eventDate}
          onChange={handleDateChange("eventDate")}
        />
      </MuiPickersUtilsProvider>

      <EventLocationField
        id="standard-name"
        label="Event Location"
        name="location"
        value={values.location}
        onChange={locationHandle}
        onSelect={locationHandle}
        className={classes.autocomplete}
      />
    </>
  );
};

export default EventSection;
