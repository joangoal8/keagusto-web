import React from "react";
import "./CardCollection.scss"
import Card from "./Card";

const CardCollection = ({collectionTitle, cards}) => {

  console.log(cards)

  return (
      <div className="card-collection">
        <h1>{collectionTitle}</h1>
        <div className="card-collection-container">
          <div className="card-collection-wrapper">
            <ul className="card-collection-items">
              {
                cards?.map((card) => {
                  return (
                      <Card key={card.id}
                            url={card.url}
                            imgUrl = {card.imgUrl}
                            title = {card.title}
                            text = {card.text}/>
                  )
                })
              }
            </ul>
          </div>
        </div>

      </div>
  )
}

export default CardCollection