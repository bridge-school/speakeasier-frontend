import React from 'react';
import TextField from '@material-ui/core/TextField';

const DescriptionSection = ({
    eventDescription,
    classInput,
    inputOnChange,
    inputError
  }) => {

    const inputProps = {
        maxLength: 1000,
    };

    return (
        <>
          <TextField
            id="description"
            label="Event description (max 1000 characters)"
            placeholder="Please describe your event"
            name="eventDescription"
            multiline={true}
            rows={2}
            rowsMax={4}
            inputProps={inputProps}
            value={eventDescription}
            onChange={inputOnChange}
            className={classInput}
          />
        </>
      )
  };

export default DescriptionSection;
