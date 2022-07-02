import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './Navbar.scss';
import {Button} from "../buttons/Button";

function Navbar() {

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
                <Link to="/dashboard" className = "nav-links" onClick={closeMobileMenu}>
                  <p className="links">Dashboard</p>
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link to="/login" className = "nav-links-mobile" onClick={closeMobileMenu}>
                  Log in
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">Log in</Button> }
          </div>
        </nav>
      </>
  )
}

export default Navbar