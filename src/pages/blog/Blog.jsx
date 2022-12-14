import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useContext } from "react";
import {LanguageContext} from "../../context/LanguageContext";

const Blog = () => {

  const { content } = useContext(LanguageContext);

  return (
      <>
        <Navbar navbarContent={content.navbar}/>
        <h1>BLOG</h1>
        <Footer footerContent={content.footer}/>
      </>
  )
}

export default Blog;