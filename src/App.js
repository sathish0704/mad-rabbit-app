import './App.css';
import ReCAPTCHA from 'react-google-recaptcha';

function App() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  
  return (
    <div className="Captcha">
      <ReCAPTCHA
      size="normal"
      sitekey="6Lc4XD4kAAAAAHxrMRMohqZ0jJTl3dljeUYJF3jN"
      onChange={onChange}
    />
    </div>
  );
}

export default App;
