import React from 'react';
import SocialsItem from './SocialsItem';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialsSection = ({
    classInput,
    inputOnChange,
    facebook,
    twitter,
    linkedin
}) => (
    <>
        <SocialsItem
            type={facebook}
            name="facebook"
            label="Facebook Url"
            classInput={classInput}
            inputOnChange={inputOnChange}
            icon={faFacebookF}
        />

        <SocialsItem
            type={twitter}
            name="twitter"
            label="Twitter Handle"
            classInput={classInput}
            inputOnChange={inputOnChange}
            icon={faTwitter}
        />

        <SocialsItem
            type={linkedin}
            name="linkedin"
            label="LinkedIn Page"
            classInput={classInput}
            inputOnChange={inputOnChange}
            icon={faLinkedinIn}
        />
    </>
);

export default SocialsSection;
