import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import moment from "moment";
import ContactSection from "./ContactSection";
import EventSection from "./FormEventSection";
import FormSectionSubmission from "./FormSectionSubmission";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    columnGap: "100px",
    rowGap: "25px"
  },
  inputField: {
    flex: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: 30,
    width: "100%"
  },
  radioField: {
    gridColumn: "span 2",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    "& Legend": {
      textAlign: "left",
      marginBottom: 10,
      lineHeight: 1.3
    }
  },
  divider: {
    gridColumn: "span 2"
  },
  autocomplete: {
    flex: 1,
    position: "relative",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    "& TextField": {
      flex: 1,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: 30,
      width: "100%"
    },
    "& div": {
      position: "relative",
      width: "100%"
    },
    "& ul": {
      position: "absolute",
      background: "white",
      zIndex: 5,
      top: "65%",
      boxShadow: "0px 5px 9px -4px rgba(0,0,0,0.38)"
    },
    "& p": {
      position: "absolute",
      background: "white",
      zIndex: 5,
      top: "75%"
    }
  },
  submitButton: {
    marginTop: "30px",
    minWidth: "150px",
    textAlign: "center"
  },
  alignLeft: {
    textAlign: "left"
  },
  spinner: {
    color: "#424242"
  }
}));

const Form = ({ history, addEvent, isLoading }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    eventName: "",
    eventWebsite: "",
    eventDate: moment(),
    location: "",
    submissionDate: moment(),
    submissionWebsite: "",
    compensation: "",
    coc: "",
    scholarships: "",
    contactName: "",
    contactEmail: "",
    createdAt: null
  });

  const [formFieldIsValid, setFormFieldIsValid] = useState({
    eventWebsiteError: false,
    eventDateError: false,
    submissionDateError: false,
    submissionWebsiteError: false,
    contactEmailError: false
  });

  const handleChange = event => {
    const formDataName = event.target.name;
    const formDataValue = event.target.value;

    if (
      formDataName === "eventWebsite" ||
      formDataName === "submissionWebsite" ||
      formDataName === "contactEmail"
    ) {
      validationCheck(formDataName, formDataValue);
    }

    setFormData({
      ...formData,
      [formDataName]: formDataValue
    });
  };

  const validationCheck = (formDataName, formDataValue) => {
    const errorFieldName = `${formDataName}Error`;
    let hasError = false;

    if (
      formDataName === "eventWebsite" ||
      formDataName === "submissionWebsite"
    ) {
      hasError = handleWebsiteValidation(formDataValue);
    }

    if (formDataName === "contactEmail") {
      hasError = handleEmailValidation(formDataValue);
    }

    setFormFieldIsValid({ [errorFieldName]: hasError });
  };

  const handleEmailValidation = email =>
    !/\S+@\S+\.\S+/.test(email) ? true : false;

  const handleWebsiteValidation = website =>
    !/([\w]+\.){1}([\w]+\.?)+/.test(website) ? true : false;

  const handleDateChange = name => date =>
    setFormData({
      ...formData,
      [name]: date
    });

  const handleSetLocation = address =>
    setFormData({
      ...formData,
      location: address
    });

  const onSubmit = event => {
    event.preventDefault();

    const currentDate = moment();

    addEvent({
      ...formData,
      eventDate: formData.eventDate.unix(),
      submissionDate: formData.submissionDate.unix(),
      createdAt: currentDate.unix()
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <form className={classes.alignLeft} onSubmit={onSubmit}>
      <div className={classes.root}>
        <EventSection
          values={formData}
          classes={classes}
          inputOnChange={handleChange}
          inputError={formFieldIsValid}
          locationHandle={handleSetLocation}
          handleDateChange={handleDateChange}
        />

        <Divider className={classes.divider} />

        <FormSectionSubmission
          maxDate={formData.maxDate}
          dateValue={formData.submissionDate}
          dateOnChange={handleDateChange("submissionDate")}
          websiteValue={formData.submissionWebsite}
          websiteOnChange={handleChange}
          websiteError={formFieldIsValid.submissionWebsiteError}
          classInput={classes.inputField}
        />

        <FormControl component="fieldset" className={classes.radioField}>
          <FormLabel component="legend">
            Are speakers compensated at your event?
          </FormLabel>
          <RadioGroup
            aria-label="Are speakers compensated at your event?"
            name="compensation"
            value={formData.compensation}
            onChange={handleChange}
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.radioField}>
          <FormLabel component="legend">
            Does your event have a publicly visible code of conduct?
          </FormLabel>
          <RadioGroup
            aria-label="Does your event have a publicly visible code of conduct?"
            name="coc"
            value={formData.coc}
            onChange={handleChange}
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.radioField}>
          <FormLabel component="legend">
            Does your event provide diversity scholarships?
          </FormLabel>

          <RadioGroup
            aria-label="Does your event provide diversity scholarships?"
            name="scholarships"
            value={formData.scholarships}
            onChange={handleChange}
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>

        <Divider className={classes.divider} />

        <ContactSection
          values={formData}
          classInput={classes.inputField}
          inputOnChange={handleChange}
          inputError={formFieldIsValid.contactEmailError}
        />

        <Divider className={classes.divider} />
      </div>

      <Button
        color="primary"
        variant="contained"
        className={classes.submitButton}
        type="submit"
        disabled={
          isLoading ||
          (Object.values(formData).includes(null) &&
            Object.values(formData).includes(""))
        }
      >
        {isLoading && (
          <CircularProgress className={classes.spinner} size={24} />
        )}
        {!isLoading && "Submit Event"}
      </Button>
    </form>
  );
};

export default withRouter(Form);
