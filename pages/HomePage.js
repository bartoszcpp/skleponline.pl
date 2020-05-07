import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <>
      <Header />
      <BackgroundImage />
      <div className="container">
        <Products />
      </div>
    </>
  );
};

export default HomePage;
