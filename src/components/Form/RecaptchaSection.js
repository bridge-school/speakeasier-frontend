import React, { useEffect } from "react";
import { ReCaptcha } from "react-recaptcha-google";

const RecaptchaSection = ({ handleRecaptcha }) => {

  useEffect(() => {
    if (formCaptcha) {
      formCaptcha.reset();
    }
  }, []);

  const onLoadRecaptcha = () => {
    if (formCaptcha) {
      formCaptcha.reset();
    }
  };

  const verifyCallback = recaptchaToken => {
    if (recaptchaToken) {
      console.log(recaptchaToken);
      handleRecaptcha(recaptchaToken);
    }
  };

  let formCaptcha;

  return (
    <ReCaptcha
      ref={el => {
        formCaptcha = el;
      }}
      size="normal"
      render="explicit"
      sitekey="6LcZKagUAAAAAP0TiXY27vKeN83TGm3tvkIMN8Ps"
      onloadCallback={onLoadRecaptcha}
      verifyCallback={verifyCallback}
    />
  );
};

export default RecaptchaSection;