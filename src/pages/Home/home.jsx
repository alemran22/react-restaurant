import Header from "../../components/Header/header";
import Navbar from "../../components/Header/Navbar/navbar";
import Banner from "../../components/Banner/banner";
import Story from "../../components/Story/story";
import Menu from "../../components/MenuSection";
import Contact from "../../components/Contact_section/contact";
import Testimonial from "../../components/Testimonial";
import SpecialOffer from "../../components/SpecialOffer";
import PopularDishes from "../../components/PopularDishes";
import Services from "../../components/Services";
import BlogSection from "../../components/BlogSection";
import Reservation from "../../components/Reservation";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Contact />
      <Story />
      <Menu />
      <Testimonial />
      <SpecialOffer />
      <PopularDishes />
      <Services />
      <BlogSection />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Home;
