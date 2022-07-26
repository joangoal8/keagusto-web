import {useContext, useState, useEffect} from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {LanguageContext} from "../../context/LanguageContext";
import {useParams} from "react-router-dom";
import BasicTitledText from "../../components/texts/BasicTitledText";
import ImageForm from "../../components/forms/ImageForm";

const ServiceOffer = () => {

  const { serviceName } = useParams();
  const { content } = useContext(LanguageContext);

  const [offerContent, setOfferContent] = useState({});

  const getServiceOfferContent = () => {
    switch (serviceName) {
      case "digital-marketing":
        return content.digitalMarketingOfferPage;
      case "software-development":
        return content.softwareDevelopmentOfferPage;
      case "automation":
        return content.automationOfferPage;
      case "data-protection":
        return content.dataProtectionOfferPage;
      default:
        return content.homeForm;
    }
  }

  useEffect(() => {
    setOfferContent(getServiceOfferContent());
  }, []);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <ImageForm inputContent={content.inputContent} formContent={offerContent} />
        <BasicTitledText title="Confía en los mejores servicios de Marketing digital"
                         text="En Comunicare somos expertos en optimizar todos los canales en una estrategia común para lograr conversiones con el menor número de impactos y clicks. Nos encargamos de captar LEADs mediante SEO SEM, redes sociales o email marketing, mejorando la usabilidad y la conversión."
        />
        <Footer footerContent={content.footer}/>
      </>
  )
}

export default ServiceOffer