import React, {useState} from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Button from "../buttons/Button";
import config from "../../config/Config";

const Footer = ({footerContent}) => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("Email can not be empty");
  const [nameErrorMessage, setNameErrorMessage] = useState("Name can not be empty");

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

  const subscribeToNewsletter = async () => {
    if (validateInputEmail() && validateInputName()) {
      const result = await fetch(config.slackWebHookUrl,
          {
            method: "POST",
            body: JSON.stringify({
              text: "FOR NEWSLETTER KEAGUSTO:" + " " + "email: " + email + " " + "name: " + name
            })
          });
      console.log(result);
    }
  }

  return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            {footerContent.heading}
          </p>
          <p className='footer-subscription-text'>
            {footerContent.subheading}
          </p>
          <div className='input-areas'>
            <form>
              <div className="footer-error-messages-container">
                <span className={emailError ? "footer-error-message" : "footer-error-message-hidden"}>{emailErrorMessage}</span>
                <span className={nameError ? "footer-error-message" : "footer-error-message-hidden"}>{nameErrorMessage}</span>
              </div>
              <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder={footerContent.emailInputPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />

              <input
                  className='footer-input'
                  name='name'
                  type='text'
                  placeholder={footerContent.nameInputPlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              <Button path='/confirmation' onClick={subscribeToNewsletter}>{footerContent.ctaSubscribe}</Button>
            </form>
          </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>{footerContent.aboutUsTitle}</h2>
              {
                footerContent?.aboutUsLinks?.map((link) => {
                  return (
                      <a key={link.url} href={link.url}>{link.text}</a>
                  )
                })
              }
            </div>

          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>{footerContent.contactUsTitle}</h2>
              {
                footerContent?.contactUsLinks?.map((link) => {
                  return (
                      <a key={link.url} href={link.url}>{link.text}</a>
                  )
                })
              }
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                Keagusto
                <i className='fab fa-typo3' />
              </Link>
            </div>
            <small className='website-rights'>Keagusto © 2022</small>
            <div className='social-icons'>
              <Link
                  className='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
              >
                <i className='fab fa-facebook-f' />
              </Link>
              <Link
                  className='social-icon-link instagram'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                  className='social-icon-link youtube'
                  to='/'
                  target='_blank'
                  aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                  className='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <Link
                  className='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Footer;
