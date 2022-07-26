import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BasicTitledText from "../../components/texts/BasicTitledText";

const HowItWorks = () => {

  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <BasicTitledText title="How it works"
                         text="Our team is made up of more than 30 professionals, the majority of whom are senior level IT engineers, that work together with the design, sales and consulting teams to provide a professional and high quality service."
        />
        <Footer footerContent={content.footer} />
      </>
  )
}

export default HowItWorks;