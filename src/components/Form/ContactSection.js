import React from 'react';
import TextField from '@material-ui/core/TextField';

const ContactSection = ({
    contactName,
    contactEmail,
    classInput,
    inputOnChange,
    inputError
  }) =>
  (
    <>
      <TextField
        id="standard-name"
        label="Contact Name"
        placeholder="Contact Name"
        name="contactName"
        value={contactName}
        onChange={inputOnChange}
        className={classInput}
      />
      <TextField
        id="standard-name"
        label="Contact E-mail"
        placeholder="Contact Email"
        name="contactEmail"
        value={contactEmail}
        onChange={inputOnChange}
        className={classInput}
        error={inputError}
      />
    </>
  );

export default ContactSection;
