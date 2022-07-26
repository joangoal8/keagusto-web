import "./RoundedImageCard.scss";

const RoundedImageCard = ({imgUrl, title, subtitle, text}) => {

  return (
      <>
        <li className="rounded-image-card-item">
          <img src={imgUrl} alt="" className="rounded-image-card-item-img"/>
          <div className="card-item-info">
            <h3 className="card-item-title">
              {title}
            </h3>
            <h5 className="card-item-text">
              {subtitle}
            </h5>
            <p>{text}</p>
          </div>
        </li>
      </>
  )
}

export default RoundedImageCard;