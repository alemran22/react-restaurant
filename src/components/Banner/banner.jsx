import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="pt-7 bg-[#292E36]">
      <div className="container mx-auto flex flex-col-reverse md:flex-row text-white items-center md:gap-48 p-5 md:p-0">
        {/* left */}
        <div className="w-full text-center md:text-start">
          <h1 className=" text-2xl md:text-8xl font-bold">
            Welcome to Restaurantate
          </h1>
          <p className="text-base  md:text-xl mt-8 mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            ipsum perspiciatis cum at earum illo dolorem numquam cumque quaerat,
          </p>

          <Link
            to={"/menu"}
            className="py-2 md:py-3 flex justify-center md:block"
          >
            <button className=" py-2 md:py-5 px-6 md:px-14 border border-[#E1B168] inline text-[#DEDEDE] text-xl md:text-2xl">
              View Menu
            </button>
          </Link>
        </div>
        {/* right */}
        <div className="w-full flex justify-center items-center md:block ">
          <img
            src="https://i.ibb.co.com/bNgmvKc/Image.png"
            alt=""
            className="bg-transparent md:translate-y-[120px] md:translate-x-36"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
