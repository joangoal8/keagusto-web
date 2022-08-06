import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";
import Navbar from "../../components/navbar/Navbar";
import CardCollection from "../../components/cards/CardCollection";
import Footer from "../../components/footer/Footer";

const Team = () => {

  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <CardCollection type="withRoundedImage" collectionTitle={content.teamPage.teamCardTitle} cards={content.teamPage.teamCards} />
        <Footer footerContent={content.footer} />
      </>
  )
}

export default Team;