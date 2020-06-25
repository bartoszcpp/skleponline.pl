import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Products from "../components/Products";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";
import FirstInfo from "../components/FirstInfo";
import SecondInfo from "../components/SecondInfo";

const HomePage = () => {
  return (
    <>
      <Header />
      <BackgroundImage />
      <div className="container">
        <FirstInfo />
        <Products count1={2} count2={3} number={4} />
      </div>
      <SecondInfo />
      <div className="container">
        <Products count1={4} count2={5} number={2} />
        <ContactForm />
      </div>
      <Contact />
    </>
  );
};

export default HomePage;
