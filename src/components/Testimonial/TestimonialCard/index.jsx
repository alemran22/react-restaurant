/* eslint-disable react/prop-types */
const TestimonialCard = ({ img, title, city, description }) => {
  return (
    <div className="py-[53px] px-[45px] bg-[#343942] h-[390px] w-[485px]">
      <div className="flex flex-row gap-3 ">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className="">
          <h3 className="text-3xl font-bold">{title}</h3>
          <h6 className="text-xl">{city}</h6>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-[25px] italic">{description}</div>
    </div>
  );
};

export default TestimonialCard;
