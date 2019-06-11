import React, { useEffect } from "react";
import { ReCaptcha } from "react-recaptcha-google";

const RecaptchaSection = () => {

  useEffect(() => {
    if (formCaptcha) {
      formCaptcha.reset();
    }
  }, []);

  const onLoadRecaptcha = () => {
    if (formCaptcha) {
      formCaptcha.reset();
    }
  }

  let formCaptcha;
  
  return (
      <div>
        <ReCaptcha
          ref={(el) => {formCaptcha = el}}
          size="normal"
          render="explicit"
          sitekey="6LcZKagUAAAAAP0TiXY27vKeN83TGm3tvkIMN8Ps"
          onloadCallback={onLoadRecaptcha}
        />
      </div>
    );
}

export default RecaptchaSection;
