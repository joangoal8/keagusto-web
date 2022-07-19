import React from "react";
import {Link} from "react-router-dom";
import "./Card.scss"

const Card = ({url, imgUrl, title, text}) => {

  return (
      <>
        <li className="card-item">
          <Link to={url} className="card-item-link">
            <img src={imgUrl} alt="" className="card-item-img"/>
            <div className="card-item-info">
              <h3 className="card-item-title">
                {title}
              </h3>
              <h5 className="card-item-text">
                {text}
              </h5>
            </div>
          </Link>
        </li>
      </>
  )
}

export default Card