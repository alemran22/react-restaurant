import TopHeader from "./TopHeader/topheader";
import Navbar from "./Navbar/navbar";
import Banner from "../Banner/banner";
import Contact from "../Contact_section/contact";
import Story from "../Story/story";

const Header = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Banner />
      <Contact />
      <Story />
    </div>
  );
};

export default Header;
