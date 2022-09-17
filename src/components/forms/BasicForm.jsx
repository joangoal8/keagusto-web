import TextCheckbox from "./TextCheckbox";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./BasicForm.scss";

const BasicForm = ({ inputContent, ctaButtonText, ctaResultPath, checkBoxStyle }) => {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("Email can not be empty");
  const [nameErrorMessage, setNameErrorMessage] = useState("Name can not be empty");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("Phone can not be empty");
  const [messageErrorMessage, setMessageErrorMessage] = useState("Message can not be empty");

  const validEmailRegExp = new RegExp("([A-Za-z0-9]+[A-Za-z0-9._]+[@][a-z]*[.][a-z]{3})");

  const validateInputEmail = () => {
    let result = false;
    if (validEmailRegExp.test(email)) {
      result = true;
      setEmailErrorMessage("");
    } else {
      setEmailErrorMessage("Your email is invalid");
    }
    setEmailError(!result);
    return result;
  }

  const validateInputName = () => {
    let result = true;
    if (name === "") {
      result = false;
    } else {
      setNameErrorMessage("");
    }
    setNameError(!result);
    return result;
  }

  const validateInputPhone = () => {
    let result = true;
    if (phone === "") {
      result = false;
    } else {
      setPhoneErrorMessage("");
    }
    setPhoneError(!result);
    return result;
  }

  const validateInputMessage = () => {
    let result = true;
    if (message === "") {
      result = false;
    } else {
      setMessageErrorMessage("");
    }
    setMessageError(!result);
    return result;
  }

  const subscribeToNewsletter = async () => {
    if (validateInputEmail() && validateInputName()
        && validateInputPhone() && validateInputMessage()) {
      const result = await fetch('https://hooks.slack.com/services/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',
          {
            method: "POST",
            body: JSON.stringify({
              text: "FOR CONTACT KEAGUSTO:" + " " + "email: " + email + " " + "name: " + name + "phone: " + phone + " " + "message: " + message
            })
          });
      if (ctaResultPath) {
        navigate(ctaResultPath);
      }
    }
  }

  return (
      <form>
        <div className={(emailError || nameError || phoneError || messageError) ? "basic-form-error-messages-container" : "basic-form-error-messages-container basic-form-error-messages-container-collapse"}>
          <span className={emailError ? "basic-form-error-message" : "basic-form-error-message-hidden"}>{emailErrorMessage}</span>
          <span className={nameError ? "basic-form-error-message" : "basic-form-error-message-hidden"}>{nameErrorMessage}</span>
          <span className={phoneError ? "basic-form-error-message" : "basic-form-error-message-hidden"}>{phoneErrorMessage}</span>
          <span className={messageError ? "basic-form-error-message" : "basic-form-error-message-hidden"}>{messageErrorMessage}</span>
        </div>
        <input
            className='form-input'
            name='email'
            type='email'
            placeholder={inputContent.emailInputPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            className='form-input'
            name='name'
            type='text'
            placeholder={inputContent.nameLastNameInputPlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            className='form-input'
            name='phone'
            type='tel'
            placeholder={inputContent.phoneInputPlaceholder}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
            className='form-text-area'
            name='message'
            placeholder={inputContent.messageInputPlaceholder}
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <div className='form-input-checkbox-container'>
          <TextCheckbox name="privacy-policy"
                        onChange={() => console.log("click checkbox")}
                        isBlack={checkBoxStyle}
                        text="Autorizo el tratamiento de mis datos para que respondan a la consulta que he realizado." />
        </div>
        <div className="form-input-div-button" onClick={subscribeToNewsletter}>
          <p className="form-input-div-button-text">{ctaButtonText}</p>
        </div>
      </form>
  )
}

export default BasicForm;