/* eslint-disable react/no-unescaped-entities */
import icon1 from "../../assets/icons/services-img/Icon.png";
import icon2 from "../../assets/icons/services-img/Icon (1).png";
import icon3 from "../../assets/icons/services-img/Icon (2).png";
const Services = () => {
  return (
    <div className="bg-[#292E36] py-44">
      <div className="container mx-auto flex flex-row gap-36 items-center">
        {/* section heading */}
        <div className="text-white mb-7 w-5/12">
          <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
            WHAT WE OFFER
          </h3>
          <h2 className="font-bold text-[40px] my-3">Our Great Services</h2>
          <p className="text-xl">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-row gap-10 w-7/12">
          {/* card1 */}
          <div className="w-[257px] h-[240px] text-white flex flex-col items-center gap-4 border-[22px] border-[#323841] py-[47px]">
            <div className="">
              <img src={icon1} alt="" className="" />
            </div>
            <h4 className="font-bold text-2xl">Opened 24/7</h4>
          </div>
          {/* card 2 */}
          <div className="w-[257px] h-[240px] text-white flex flex-col items-center gap-4 border-[22px] border-[#323841] py-[47px]">
            <div className="">
              <img src={icon2} alt="" className="" />
            </div>
            <h4 className="font-bold text-2xl">Special Menus</h4>
          </div>
          {/* card 3 */}
          <div className="w-[257px] h-[240px] text-white flex flex-col items-center gap-4 border-[22px] border-[#323841] py-[47px]">
            <div className="">
              <img src={icon3} alt="" className="" />
            </div>
            <h4 className="font-bold text-2xl">Home Delivery</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
