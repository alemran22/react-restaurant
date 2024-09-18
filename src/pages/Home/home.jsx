import Header from "../../components/Header/header";
import Navbar from "../../components/Header/Navbar/navbar";
import Banner from "../../components/Banner/banner";
import Contact from "../Contact/contact";
import Story from "../../components/Story/story";
import Menu from "../../components/MenuSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Contact />
      <Story />
      <Menu />
    </div>
  );
};

export default Home;
