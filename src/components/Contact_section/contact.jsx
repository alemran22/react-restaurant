// import storyList from "../../constant/home_constant";
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlineSpeed } from "react-icons/md";
// import { RiFileList3Line } from "react-icons/ri";
const Contact = () => {
  return (
    <div className="bg-[#FFF8F5]">
      <div className="flex flex-row container mx-auto justify-between  pt-28 pb-16">
        <div className="flex flex-row gap-2 items-center">
          <div className="">
            {/* <img src={CiLocationOn} alt="" className="" /> */}
          </div>
          <div className="">
            <h1 className="text-3xl font-bold py-3">Locate Us</h1>
            <p className="text-xl">Riverside 25, San Francisco, California</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="">
            {/* <img src={MdOutlineSpeed} alt="" className="" /> */}
          </div>
          <div className="">
            <h1 className="text-3xl font-bold py-3">Open Hours</h1>
            <p className="text-xl">Mon To Fri 9:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="">
            {/* <img src={RiFileList3Line} alt="" className="" /> */}
          </div>
          <div className="">
            <h1 className="text-3xl font-bold py-3">Reservation</h1>
            <p className="text-xl">hirestaurantate@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
