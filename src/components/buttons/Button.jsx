import React from "react";
import {Link} from "react-router-dom";
import "./LoginButton.scss";

const Button = ({children, path, onClick}) => {

  return (
      <Link to={path ? path : ""} className="btn-mobile">
        <button className="btn btn--primary btn--medium" onClick={onClick}>
          {children}
        </button>
      </Link>
  )
};

export default Button;