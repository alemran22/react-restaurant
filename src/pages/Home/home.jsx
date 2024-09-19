import Header from "../../components/Header/header";
import Navbar from "../../components/Header/Navbar/navbar";
import Banner from "../../components/Banner/banner";
import Story from "../../components/Story/story";
import Menu from "../../components/MenuSection";
import Contact from "../../components/Contact_section/contact";

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
