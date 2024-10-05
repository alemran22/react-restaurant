import Error404 from "../../components/404";
import Footer from "../../components/Footer";
import Header from "../../components/Header/header";
import Navbar from "../../components/Header/Navbar/navbar";
import PageTitle from "../../components/PageTitle";

const Error = () => {
  return (
    <div className="">
      <Header />
      <Navbar />
      <PageTitle title={"404"} />
      <Error404 />
      <Footer />
    </div>
  );
};

export default Error;
