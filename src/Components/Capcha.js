import ReCAPTCHA from "react-google-recaptcha";
 
function onChange(value) {
  console.log("Captcha value:", value);
}
 
ReactDOM.render(
  <ReCAPTCHA
    sitekey="6Lc4XD4kAAAAAHxrMRMohqZ0jJTl3dljeUYJF3jN"
    onChange={onChange}
  />,
  document.body
);
