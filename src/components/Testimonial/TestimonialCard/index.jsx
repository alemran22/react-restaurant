/* eslint-disable react/prop-types */
const TestimonialCard = ({ img, title, city, description }) => {
  return (
    <div className="py-8 px-6 md:py-[53px] md:px-[45px] bg-[#343942] h-[390px] w-full md:w-[485px]">
      <div className="flex flex-col md:flex-row gap-3 ">
        <div className="self-center">
          <img src={img} alt="" />
        </div>
        <div className="">
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
          <h6 className="text-lg md:text-xl">{city}</h6>
        </div>
      </div>
      <hr className="my-4 " />
      <div className="text-base md:text-[25px] italic">{description}</div>
    </div>
  );
};

export default TestimonialCard;
