import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ImageSlider from "../../components/slider/ImageSlider";
import CardCollection from "../../components/cards/CardCollection";
import { useContext } from "react";
import {LanguageContext} from "../../context/LanguageContext";
import ImageForm from "../../components/forms/ImageForm";

const Home = () => {

  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <ImageSlider />
        <CardCollection collectionTitle={content.cardTitle} cards={content.cards} />
        <ImageForm title="¿Quieres tener una reunión con el equipo?" imageUrl="/images/forms/contactUs.jpg"/>
        <Footer footerContent={content.footer}/>
      </>
  )
}

export default Home