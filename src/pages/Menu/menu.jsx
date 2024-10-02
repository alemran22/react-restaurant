import Footer from "../../components/Footer";
import Header from "../../components/Header/header";
import Navbar from "../../components/Header/Navbar/navbar";
import DessertItems from "../../components/MenuPageComponents/DessertItems";
import MainDish from "../../components/MenuPageComponents/MainDish";
import StartersSection from "../../components/MenuPageComponents/StartersDishSection";
import PageTitle from "../../components/PageTitle";
import Reservation from "../../components/Reservation";

const Menu = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <PageTitle title={"Our Menu"} />
      <StartersSection />
      <MainDish />
      <DessertItems />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Menu;
