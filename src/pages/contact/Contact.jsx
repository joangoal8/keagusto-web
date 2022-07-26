import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useContext } from "react";
import {LanguageContext} from "../../context/LanguageContext";
import BackgroundImageForm from "../../components/forms/BackgroundImageForm";
import BasicTitledText from "../../components/texts/BasicTitledText";

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
        <BasicTitledText title="Confía en los mejores servicios de Marketing digital"
                         text="En Comunicare somos expertos en optimizar todos los canales en una estrategia común para lograr conversiones con el menor número de impactos y clicks. Nos encargamos de captar LEADs mediante SEO SEM, redes sociales o email marketing, mejorando la usabilidad y la conversión."
        />
        <Footer footerContent={content.footer}/>
      </>
  )
}

export default Contact;