import "./BasicTitledText.scss";

const BasicTitledText = ({title, text}) => {

  return (
      <div className="titled-text-content-container">
        <h2 className="titled-text-content-title">{title}</h2>
        <p className="titled-text-content-text">{text}</p>
      </div>
  )
};

export default BasicTitledText;