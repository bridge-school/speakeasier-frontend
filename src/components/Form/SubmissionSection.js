import React from 'react';
import Moment from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const SubmissionSection = ({
		dateValue,
		dateOnChange,
		maxDate,
		websiteValue,
		websiteOnChange,
		websiteError,
		classInput
}) =>
  (
		<>
			<MuiPickersUtilsProvider utils={Moment}>
				<DatePicker
					disablePast
					maxDate={maxDate}
					className={classInput}
					label="Submission Date"
					value={dateValue}
					onChange={dateOnChange}
				/>
			</MuiPickersUtilsProvider>
			<TextField
				id="submission-website"
				label="Submission Website"
				placeholder="Submission Website"
				name="submissionWebsite"
				value={websiteValue}
				onChange={websiteOnChange}
				className={classInput}
				error={websiteError}
			/>
		</>
	);

export default SubmissionSection;
