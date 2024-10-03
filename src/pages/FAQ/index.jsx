/* eslint-disable react-refresh/only-export-components */

import QuestionAnswerSection from "../../components/FAQPageComponent";
import Footer from "../../components/Footer";
import Header from "../../components/Header/header";
import Navbar from "../../components/Header/Navbar/navbar";
import PageTitle from "../../components/PageTitle";

const FAQ = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <PageTitle title={"FAQ"} />
      <QuestionAnswerSection />
      <Footer />
    </div>
  );
};

export default FAQ;
