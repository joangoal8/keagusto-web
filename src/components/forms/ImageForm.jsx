import React from "react";
import "./ImageForm.scss"
import BasicForm from "./BasicForm";

const ImageForm = ({ inputContent, formContent }) => {

  return (
      <div className="image-form-container">

        <div className="image-form-title">
          <h2>{formContent.title}</h2>
        </div>

        <div className="image-form-content">
          <div className="image-form-col-form">
            <BasicForm inputContent={inputContent} ctaButtonText={formContent.ctaButtonText} ctaResultPath={formContent.ctaResultPath} />
          </div>
          <div className="image-form-col-img">
            <img src={formContent.imageUrl} alt="" className="image-form-img"/>
          </div>
        </div>

      </div>
  )
};

export default ImageForm;