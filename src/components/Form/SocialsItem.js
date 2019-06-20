import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@material-ui/core/InputAdornment';

const SocialsItem = ({
    classInput,
    inputOnChange,
    type,
    name,
    label,
    icon
}) => (
    <>      
        <TextField
            className={classInput}
            label={label}
            name={name}
            value={type}
            onChange={inputOnChange}
            InputProps={{
                startAdornment: <InputAdornment position="start">
                                    <Icon icon={icon} size="lg"/>
                                </InputAdornment>,
                }}
        />
    </>
);

export default SocialsItem;
