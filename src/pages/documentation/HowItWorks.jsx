import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./HowItWorks.scss";
import ImageForm from "../../components/forms/ImageForm";

const HowItWorks = () => {

  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <div className="how-it-works-container">
          <h2 className="how-it-works-text-content-title">{content.howItWorksPage.title}</h2>
          <p className="how-it-works-text-content-text">{content.howItWorksPage.firstParagraph}</p>
          <ul>
            {
              content.howItWorksPage.companyIssues?.map((issue, index) => {
                return <li value={index}>{issue.text}</li>
              })
            }
          </ul>
          <p className="how-it-works-text-content-text">{content.howItWorksPage.secondParagraph}</p>
        </div>
        <ImageForm inputContent={content.inputContent} formContent={content.homeForm} />
        <Footer footerContent={content.footer} />
      </>
  )
}

export default HowItWorks;