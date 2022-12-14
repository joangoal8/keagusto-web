import React from "react";
import {Link} from "react-router-dom";
import "./ContactButton.scss";

const BTN_STYLES = ["btn--primary", "btn--outline"];

const BTN_SIZES = ["btn--medium", "btn--large"];

export const ContactButton = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = BTN_STYLES.includes(buttonStyle) ? buttonStyle : BTN_STYLES[0];
  const checkButtonSize = BTN_SIZES.includes(buttonSize) ? buttonSize : BTN_SIZES[0];

  return (
      <Link to="/contact" className="btn-mobile">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
          {children}
        </button>
      </Link>
  )
};