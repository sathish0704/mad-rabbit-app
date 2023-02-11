import React from "react";
import App from "../App";
import './FormStyles.css'
import Collapsible from 'react-collapsible';

export default function Forms() {
  const [email, setEmail] = React.useState("");
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [statte, setStatte] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [instagram, setInstagram] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      firstName: ${fName}
      lastName: ${lName}
      Company: ${company}
      Address1: ${address1}
      Address2: ${address2}
      City: ${city}
      State: ${statte}
      zipCode: ${zipcode}
      Mobile: ${mobile}
    `);

    event.preventDefault();
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div class="login__brand">
          <h1 class="login__logo"><img alt="Mad Rabbit Tattoo" src="https://shopify-wholesale-app.s3.amazonaws.com/uploads/shop/logo/19260/shop_logo_19260_1623975073.png"></img></h1>
          <p id="formNotes">
            Tattoo Aftercare is very important to preserve your best work. Lets work together to preserve your clients new art and assist in the healing process. Please fill out the application below.
          </p>
        </div>


          <div id="NameDetails">
          <Collapsible trigger="Contact Details">

            <div id="dropdownNames" > <span ></span></div><br></br>
            <label>
              First Name<br></br>
              <input
                name="firstName"
                type="text"
                value={fName}
                onChange={e => setfName(e.target.value)}
                required />
            </label><br></br>
            <label>
              Last Name<br></br>
              <input
                name="lasttName"
                type="text"
                value={lName}
                onChange={e => setlName(e.target.value)}
                required />
            </label><br></br>

            <label>
              Email Address<br></br>
              <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required />
            </label><br></br>
            </Collapsible>
          </div>

          <div id="busineeAddress">
          <Collapsible trigger="Business Address"><br></br>
          <label>
            Company <span id="optional">(optional)</span><br></br>
            <input
              name="company"
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
              required />
          </label><br></br>

          <label>
            AddressLine 1<br></br>
            <input
              name="address1"
              type="text"
              value={address1}
              onChange={e => setAddress1(e.target.value)}
              required />
          </label><br></br>


          <label>
            AddressLine 2<span id="optional">(optional)</span><br></br>
            <input
              name="address1"
              type="text"
              value={address2}
              onChange={e => setAddress2(e.target.value)}
              required />
          </label><br></br>

          <label>
            City<br></br>
            <input
              name="city"
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
              required />
          </label><br></br>

          <label>
            Country<br></br>
            <select id="ShippingCountry"><option value="">Select...</option><option value="Canada">Canada</option><option value="United States">United States</option><option value="United Kingdom">United Kingdom</option><option value="Afghanistan">Afghanistan</option><option value="Aland Islands">Aland Islands</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua And Barbuda">Antigua And Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia And Herzegovina">Bosnia And Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo, The Democratic Republic Of The">Congo, The Democratic Republic Of The</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Côte d'Ivoire">Côte d'Ivoire</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Eswatini">Eswatini</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea Bissau">Guinea Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island And Mcdonald Islands">Heard Island And Mcdonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran, Islamic Republic Of">Iran, Islamic Republic Of</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle Of Man">Isle Of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea, Democratic People's Republic Of">Korea, Democratic People's Republic Of</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova, Republic of">Moldova, Republic of</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Macedonia">North Macedonia</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn">Pitcairn</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Qatar">Qatar</option><option value="Republic of Cameroon">Republic of Cameroon</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Barthélemy">Saint Barthélemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre And Miquelon">Saint Pierre And Miquelon</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome And Principe">Sao Tome And Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia And The South Sandwich Islands">South Georgia And The South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="St. Vincent">St. Vincent</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard And Jan Mayen">Svalbard And Jan Mayen</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania, United Republic Of">Tanzania, United Republic Of</option><option value="Thailand">Thailand</option><option value="Timor Leste">Timor Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands, British">Virgin Islands, British</option><option value="Wallis And Futuna">Wallis And Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select>
          </label>
          <div className="stateCodes">
            <label>State / Province <br></br>
              <input
                name="statte"
                type="text"
                value={statte}
                onChange={e => setStatte(e.target.value)}
                required />
            </label>
          </div>

          <div className="zipCode">
            <label>
              ZIP / Postal code<br></br>
              <input
                name="zipcode"
                type="number"
                value={zipcode}
                onChange={e => setZipcode(e.target.value)}
                required />
            </label><br></br>
          </div>

          <label>
            Phone number <br></br>
            <input
              name="mobile"
              type="number"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              required />
          </label><br></br>
        </Collapsible>
        </div>

        <div id="addInfo">
        <Collapsible trigger="Additional Information">
        <br></br><label>
            Instagram / Facebook Name<br></br>
            <input
              name="instagram"
              type="text"
              value={instagram}
              onChange={e => setInstagram(e.target.value)}
              required />
          </label><br></br>
        </Collapsible>
        </div><br></br>
        
        <div>
          <App />
        </div>


        <div id="bottomLogin">
          <input className="submitButton" type={"submit"} value="APPLY FOR WHOLESALE" title="checking" ></input>
          <p>Already have an account? <a>Log in</a></p>
          </div>

      </form>
    </div>

  );
}
