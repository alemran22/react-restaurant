import ChangeLogSection from "../../components/Changelog";
import Footer from "../../components/Footer";
import Header from "../../components/Header/header";
import Navbar from "../../components/Header/Navbar/navbar";
import PageTitle from "../../components/PageTitle";

const ChangeLog = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <PageTitle title={"ChangeLog"} />
      <ChangeLogSection />
      <Footer />
    </div>
  );
};

export default ChangeLog;
