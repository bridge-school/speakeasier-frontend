import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const RadioButtonsSection = ({
    compensation,
    coc,
    scholarships,
    classRadioField,
    handleChange
  }) =>
  (
    <>
      <FormControl component="fieldset" className={classRadioField}>
        <FormLabel component="legend">
          Are speakers compensated at your event?
        </FormLabel>
        <RadioGroup
          aria-label="Are speakers compensated at your event?"
          name="compensation"
          value={compensation}
          onChange={handleChange}
        >
          <FormControlLabel
            value="yes"
            control={<Radio color="primary"/>}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={<Radio color="primary"/>}
            label="No"
          />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" className={classRadioField}>
        <FormLabel component="legend">
          Does your event have a publicly visible code of conduct?
        </FormLabel>
        <RadioGroup
          aria-label="Does your event have a publicly visible code of conduct?"
          name="coc"
          value={coc}
          onChange={handleChange}
        >
          <FormControlLabel
            value="yes"
            control={<Radio color="primary"/>}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={<Radio color="primary"/>}
            label="No"
          />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" className={classRadioField}>
        <FormLabel component="legend">
          Does your event provide diversity scholarships?
        </FormLabel>

        <RadioGroup
          aria-label="Does your event provide diversity scholarships?"
          name="scholarships"
          value={scholarships}
          onChange={handleChange}
        >
          <FormControlLabel
            value="yes"
            control={<Radio color="primary"/>}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={<Radio color="primary"/>}
            label="No"
          />
        </RadioGroup>
      </FormControl>
    </>
  );

export default RadioButtonsSection;
