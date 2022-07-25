import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useContext } from "react";
import {LanguageContext} from "../../context/LanguageContext";
import BackgroundImageForm from "../../components/forms/BackgroundImageForm";

const Contact = () => {

  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <BackgroundImageForm imageUrl={content.contactPage.imgUrl}
                             inputContent={content.inputContent}
                             ctaButtonText={content.contactPage.ctaButtonText}
                             ctaResultPath={content.contactPage.ctaPath}
                             />
        <Footer footerContent={content.footer}/>
      </>
  )
}

export default Contact;