import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Products from "../components/Products";
import FirstInfo from "../components/FirstInfo";
import SecondInfo from "../components/SecondInfo";
import Link from "next/link";

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
        <div className="contactUs">
          <h2>Jeśli masz jakieś pytania</h2>
          <Link href="/Contact">
            <button className="submit btn-mod btn-large">
              SKONTAKTUJ SIĘ Z NAMI!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
