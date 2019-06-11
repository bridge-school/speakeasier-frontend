import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-google";

class RecaptchaSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
  }
  componentDidMount() {
    if (this.formCaptcha) {
      this.formCaptcha.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.formCaptcha) {
      this.formCaptcha.reset();
    }
  }

  render() {
    return (
      <div>
        <ReCaptcha
          ref={el => {
            this.formCaptcha = el;
          }}
          size="normal"
          render="explicit"
          sitekey="6LcZKagUAAAAAP0TiXY27vKeN83TGm3tvkIMN8Ps"
          onloadCallback={this.onLoadRecaptcha}
        />
      </div>
    );
  }
}
export default RecaptchaSection;
