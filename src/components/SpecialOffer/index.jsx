/* eslint-disable react/no-unescaped-entities */
import Offer1 from "../../assets/images/special-offer/1.png";
import Offer2 from "../../assets/images/special-offer/2.png";
const SpecialOffer = () => {
  return (
    <div className="container mx-auto mt-48 flex flex-col items-center">
      {/* section heading */}
      <div className="text-center mb-7 w-[702px]">
        <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
          OFFER
        </h3>
        <h2 className="font-bold text-[40px] my-3">Our special Offer dishes</h2>
        <p className="text-xl">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making.
        </p>
      </div>
      {/* offer image */}
      <div className="flex flex-row justify-between gap-8 items-center">
        <div className="">
          <img src={Offer1} alt="" className="" />
        </div>
        <div className="">
          <img src={Offer2} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
