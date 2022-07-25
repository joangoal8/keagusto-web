import React from "react";
import "./ImageForm.scss"
import BasicForm from "./BasicForm";
import "./BackgroundImageForm.scss";

const BackgroundImageForm = ({ imageUrl, inputContent, ctaButtonText, ctaResultPath }) => {

  return (
      <div className="background-image-form-container">
        <div className="form-background-text-container">
          <BasicForm inputContent={inputContent}
                     ctaButtonText={ctaButtonText}
                     ctaResultPath={ctaResultPath}
                     checkBoxStyle={false}
          />
        </div>
        <img src={imageUrl} alt="travel image" className="form-background-image" />
      </div>
  )
};

export default BackgroundImageForm;