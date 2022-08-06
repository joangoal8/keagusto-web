import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";
import Navbar from "../../components/navbar/Navbar";
import CardCollection from "../../components/cards/CardCollection";
import Footer from "../../components/footer/Footer";

const Confirmation = () => {

  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <CardCollection type="withRoundedImage" collectionTitle={content.confirmationPage.confirmationCardTitle} cards={content.confirmationPage.confirmationCards} />
        <Footer footerContent={content.footer} />
      </>
  )
}

export default Confirmation;