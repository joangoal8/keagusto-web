import React from "react";
import "./Card.scss"

const CardText = ({title, text}) => {

  return (
      <>
        <li className="card-item">
          <div className="card-item-info">
            <h3 className="card-item-title">
              {title}
            </h3>
            <h5 className="card-item-text">
              {text}
            </h5>
          </div>
        </li>
      </>
  )
}

export default CardText;