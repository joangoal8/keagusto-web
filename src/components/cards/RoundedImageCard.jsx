import "./RoundedImageCard.scss";

const RoundedImageCard = ({imgUrl, title, subtitle, text}) => {

  return (
      <>
        <li className="rounded-image-card-item">
          <img src={imgUrl} alt="" className="rounded-image-card-item-img"/>
          <div className="rounded-card-item-info">
            <h3 className="rounded-card-item-title">
              {title}
            </h3>
            <h5 className="rounded-card-item-subtitle">
              {subtitle}
            </h5>
            <p className="rounded-card-item-text">{text}</p>
          </div>
        </li>
      </>
  )
}

export default RoundedImageCard;