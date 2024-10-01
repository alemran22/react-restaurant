/* eslint-disable react/prop-types */
const TestimonialCard = ({ img, title, city, description }) => {
  return (
    <div className="py-3 h-[390px] md:h-auto md:py-0 m-1 md:m-0 bg-[#292E36]">
      <div className="flex flex-col items-center md:py-[53px] w-full ">
        <img
          src="https://i.ibb.co.com/kXRgJSY/image.png"
          alt=""
          className="mb-8"
        />
        <div className="md:w-1/4 mx-auto md:text-[25px] italic mb-5">
          {description}
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <div className="self-center">
            <img src={img} alt="" />
          </div>
          <div className="">
            <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
            <h6 className="text-lg md:text-xl">{city}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
