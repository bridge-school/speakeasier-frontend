import React from 'react';
import TextField from '@material-ui/core/TextField';

const ContactSection = ({ values, classInput, inputOnChange, inputError }) => {
  return (
    <>
    <TextField
      id="standard-name"
      label="Contact Name"
      placeholder="Contact Name"
      name="contactName"
      value={values.contactName}
      onChange={inputOnChange}
      className={classInput}
    />
    <TextField
      id="standard-name"
      label="Contact E-mail"
      placeholder="Contact Email"
      name="contactEmail"
      value={values.contactEmail}
      onChange={inputOnChange}
      className={classInput}
      error={inputError}
    />
    </>
  )
}

export default ContactSection;
