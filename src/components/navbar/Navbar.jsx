import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './Navbar.scss';
import {LoginButton} from "../buttons/LoginButton";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import {LanguageContext} from "../../context/LanguageContext";

function Navbar() {

  const { content, dispatchLanguage } = useContext(LanguageContext);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <i className="logo-icon" />
              <p className="company-name">ShineIT</p>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={ click ? "fas fa-times" : 'fas fa-bars'} />
            </div>
            <ul className={click ? "nav-menu active" : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className = "nav-links" onClick={closeMobileMenu}>
                  <p className="links">Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/phone" className = "nav-links" onClick={closeMobileMenu}>
                  <PhoneEnabledIcon fontSize="medium" className="ui-phone-icon"/>
                  <p className="links">+34 649313833</p>
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link to="/login" className = "nav-links-mobile" onClick={closeMobileMenu}>
                  Log in
                </Link>
              </li>
            </ul>
            {button && <LoginButton buttonStyle="btn--outline">Log in</LoginButton> }
          </div>
        </nav>
      </>
  )
}

export default Navbar