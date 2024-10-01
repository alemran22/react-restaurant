/* eslint-disable react/no-unescaped-entities */

const SpecialOffer = () => {
  return (
    <div className="container mx-auto my-5 md:my-24 p-5 md:p-0 flex flex-col items-center">
      {/* section heading */}
      <div className="text-center md:py-6 w-full md:w-[702px]">
        <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
          OFFER
        </h3>
        <h2 className="font-bold text-2xl md:text-[40px] my-3">
          Our special Offer dishes
        </h2>
        <p className="text-lg md:text-xl">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making.
        </p>
      </div>
      {/* offer cards */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center w-full my-5 ">
        <div className=" w-full">
          <img
            src="https://i.ibb.co.com/x5d1DGm/1.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
        <div className=" w-full">
          <img
            src="https://i.ibb.co.com/nm4ckVW/2.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
