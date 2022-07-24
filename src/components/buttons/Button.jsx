import React from "react";
import {Link} from "react-router-dom";
import "./ContactButton.scss";

const Button = ({children, path, styleClass, onClick}) => {

  return (
      <Link to={path ? path : ""} className="btn-mobile">
        <button className={ styleClass ? styleClass : "btn btn--primary btn--medium"} onClick={onClick}>
          {children}
        </button>
      </Link>
  )
};

export default Button;