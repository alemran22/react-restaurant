import Header from "../../components/Header/header";
import Navbar from "../../components/Header/Navbar/navbar";
import PageTitle from "../../components/PageTitle";
import PasswordSection from "../../components/PasswordComponent";
import Footer from "../../components/Footer";

const Password = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <PageTitle title={"Password Protected"} />
      <PasswordSection />
      <Footer />
    </div>
  );
};

export default Password;
