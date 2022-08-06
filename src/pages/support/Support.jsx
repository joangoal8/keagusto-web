import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";
import Navbar from "../../components/navbar/Navbar";
import CardCollection from "../../components/cards/CardCollection";
import Footer from "../../components/footer/Footer";
import ImageForm from "../../components/forms/ImageForm";

const Support = () => {

  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <CardCollection type="withRoundedImage" collectionTitle={content.supportPage.supportCardTitle} cards={content.supportPage.supportCards} />
        <ImageForm inputContent={content.inputContent} formContent={content.homeForm} />
        <Footer footerContent={content.footer} />
      </>
  )
}

export default Support;