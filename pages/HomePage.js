import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Products from "../components/Products";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Header />
      <BackgroundImage />
      <div className="container">
        <Products />
        <ContactForm />
      </div>
      <Contact />
    </>
  );
};

export default HomePage;
