import Details from "../../components/aboutPageComponents/Details";
import Gallery from "../../components/aboutPageComponents/Gallery";
import Services from "../../components/aboutPageComponents/ServicesSection";
import Team from "../../components/aboutPageComponents/TeamSection";
import Testimonial from "../../components/aboutPageComponents/Testimonial";
import Footer from "../../components/Footer";
import Header from "../../components/Header/header";
import Navbar from "../../components/Header/Navbar/navbar";
import PageTitle from "../../components/PageTitle";
import Reservation from "../../components/Reservation";

const About = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <PageTitle title={"About Us"} />
      <Details />
      <Services />
      <Team />
      <Testimonial />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  );
};

export default About;
