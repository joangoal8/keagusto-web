import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useContext } from "react";
import {LanguageContext} from "../../context/LanguageContext";
import {useParams} from "react-router-dom";

const ServiceOffer = () => {

  const { serviceName } = useParams();
  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <h1>{serviceName}</h1>
        <Footer footerContent={content.footer}/>
      </>
  )
}

export default ServiceOffer