/* eslint-disable react/prop-types */
import OutlineButton from "../../../OutlineButton";

const ServiceCard = ({ img, title, description }) => {
  return (
    <div className="text-white text-center py-8 px-6 md:py-[53px] md:px-[45px] w-full ">
      <div className="flex flex-col gap-3 md:gap-6 ">
        <div className="self-center">
          <img src={img} alt="" />
        </div>
        <div className="">
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        </div>

        <div className="text-base md:text-xl">{description}</div>
        <div className="">
          <OutlineButton title={"See More"} className="border-0" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
