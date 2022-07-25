import TextCheckbox from "./TextCheckbox";
import Button from "../buttons/Button";
import {useState} from "react";
import "./BasicForm.scss";

const BasicForm = ({ inputContent, ctaButtonText, ctaResultPath, checkBoxStyle }) => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("Email can not be empty");
  const [nameErrorMessage, setNameErrorMessage] = useState("Name can not be empty");

  return (
      <form>
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
        <Button path={ctaResultPath} styleClass="form-input-button" onClick={() => console.log("CLICK")}>{ctaButtonText}</Button>
      </form>
  )
}

export default BasicForm;