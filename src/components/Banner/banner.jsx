import { Link } from "react-router-dom";
import BannerImage from "../../assets/images/BannerImage.svg";
import BannerCircle from "../../assets/icons/banner-circle.svg";
const Banner = () => {
  return (
    <div className="pt-7 bg-[#292E36]">
      <div className="container mx-auto flex flex-row text-white items-center gap-48">
        {/* left */}
        <div className="w-full">
          <h1 className="text-8xl font-bold">Welcome to Restaurantate</h1>
          <p className="text-xl mt-8 mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            ipsum perspiciatis cum at earum illo dolorem numquam cumque quaerat,
          </p>

          <Link to={"/menu"} className="py-3">
            <button className="py-5 px-14 border border-[#E1B168] inline text-[#DEDEDE] text-2xl">
              View Menu
            </button>
          </Link>
        </div>
        {/* right */}
        <div className="w-full relative">
          <div className="absolute -right-40 -top-2">
            <img src={BannerCircle} alt="" />
          </div>
          <div className="bg-[#40464F] p-7 rounded-t-full flex justify-center z-10 relative">
            <img src={BannerImage} alt="" className="rounded-t-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
