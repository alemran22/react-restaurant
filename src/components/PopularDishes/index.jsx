/* eslint-disable react/no-unescaped-entities */
import img1 from "../../assets/images/popular-dishes/Image.png";
import img2 from "../../assets/images/popular-dishes/Image (1).png";
import img3 from "../../assets/images/popular-dishes/Image (2).png";
import img4 from "../../assets/images/popular-dishes/Image (3).png";
import OutlineButton from "../OutlineButton";
const PopularDishes = () => {
  return (
    <div className="md:mb-40 ">
      <div className="container mx-auto md:mt-36 mb-5  flex flex-col items-center p-5 md:p-0">
        {/* section heading */}
        <div className="text-center w-full md:w-[702px] mb-16">
          <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
            MENU
          </h3>
          <h2 className="font-bold text-2xl md:text-[40px] my-3">
            Popular Dishes
          </h2>
          <p className="text-lg md:text-xl">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>
        {/* offer cards */}
        <div className="flex flex-col items-center md:flex-row gap-5 md:gap-7 justify-between w-full">
          {/* card 1 */}
          <div className="w-full md:w-[321px]">
            <div className="mb-4">
              <img src={img1} alt="" />
            </div>
            <div className="">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl md:text-[30px] font-bold">
                  Chicken Manjaro
                </h3>
                <p className="text-xl md:text-[30px] font-bold">$15</p>
              </div>
              <hr className="my-4 hidden md:block" />
              <p className="text-lg md:text-xl">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="w-full md:w-[321px]">
            <div className="mb-4">
              <img src={img2} alt="" />
            </div>
            <div className="">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl md:text-[30px] font-bold">
                  Chicken Manjaro{" "}
                </h3>
                <p className="text-xl md:text-[30px] font-bold">$15</p>
              </div>
              <hr className="my-4 hidden md:block" />
              <p className="text-lg md:text-xl">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="w-full md:w-[321px]">
            <div className="mb-4">
              <img src={img3} alt="" />
            </div>
            <div className="">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl md:text-[30px] font-bold">
                  Chicken Manjaro{" "}
                </h3>
                <p className="text-xl md:text-[30px] font-bold">$15</p>
              </div>
              <hr className="my-4 hidden md:block" />
              <p className="text-lg md:text-xl">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="w-full md:w-[321px]">
            <div className="mb-4">
              <img src={img4} alt="" />
            </div>
            <div className="">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl md:text-[30px] font-bold">
                  Chicken Manjaro{" "}
                </h3>
                <p className="text-xl md:text-[30px] font-bold">$15</p>
              </div>
              <hr className="my-4 hidden md:block" />
              <p className="text-lg md:text-xl">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-16">
          <OutlineButton title={"See All Dishes"} />
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
