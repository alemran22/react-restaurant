import AboutUs from "../../components/AboutPageComponents/AboutUsSection";
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
      <AboutUs />
      <Reservation />
      <Footer />
    </div>
  );
};

export default About;
