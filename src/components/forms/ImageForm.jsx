import React, {useState} from "react";
import "./ImageForm.scss"
import Button from "../buttons/Button";
import TextCheckbox from "./TextCheckbox";

const ImageForm = ({ title, imageUrl }) => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("Email can not be empty");
  const [nameErrorMessage, setNameErrorMessage] = useState("Name can not be empty");


  return (
      <div className="image-form-container">

        <div className="image-form-title">
          <h2>{title}</h2>
        </div>

        <div className="image-form-content">
          <div className="image-form-col-form">
            <form>
              <input
                  className='form-input'
                  name='email'
                  type='email'
                  placeholder="your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />

              <input
                  className='form-input'
                  name='name'
                  type='text'
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              <input
                  className='form-input'
                  name='phone'
                  type='tel'
                  placeholder="Your phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                  className='form-text-area'
                  name='message'
                  placeholder="Your message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
              />
              <div className='form-input-checkbox-container'>
                <TextCheckbox name="privacy-policy" onChange={() => console.log("click checkbox")} text="Autorizo el tratamiento de mis datos para que respondan a la consulta que he realizado." />
              </div>
              <Button path='/thanks' styleClass="form-input-button" onClick={() => console.log("CLICK")}>Click</Button>
            </form>
          </div>
          <div className="image-form-col-img">

            <img src={imageUrl} alt="" className="image-form-img"/>
          </div>
        </div>

      </div>
  )
};

export default ImageForm;