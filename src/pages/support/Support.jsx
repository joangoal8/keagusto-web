import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";
import Navbar from "../../components/navbar/Navbar";
import CardCollection from "../../components/cards/CardCollection";
import Footer from "../../components/footer/Footer";

const Support = () => {

  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <CardCollection type="withRoundedImage" collectionTitle={content.supportCardTitle} cards={content.supportCards} />
        <Footer footerContent={content.footer} />
      </>
  )
}

export default Support;