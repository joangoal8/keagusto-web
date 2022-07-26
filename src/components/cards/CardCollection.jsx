import React from "react";
import "./CardCollection.scss"
import Card from "./Card";
import CardText from "./CardText";
import RoundedImageCard from "./RoundedImageCard";

const CardCollection = ({collectionTitle, type = "", cards}) => {

  console.log(cards)

  const cardFactory = (type, card) => {
    switch (type) {
      case "withText":
        return (
            <CardText title={card.title} text={card.text} />
        );
      case "withRoundedImage":
        return (
            <RoundedImageCard
                key={card.id}
                imgUrl={card.imgUrl}
                title={card.name}
                subtitle={card.role}
                text={card.description}
            />
        );
      default:
        return (
            <Card key={card.id}
                  url={card.url}
                  imgUrl = {card.imgUrl}
                  title = {card.title}
                  text = {card.text}/>
        );
    }
  }

  return (
      <div className="card-collection">
        <h1>{collectionTitle}</h1>
        <div className="card-collection-container">
          <div className="card-collection-wrapper">
            <ul className="card-collection-items">
              {
                cards?.map((card) => {
                  return cardFactory(type, card);
                })
              }
            </ul>
          </div>
        </div>

      </div>
  )
}

export default CardCollection