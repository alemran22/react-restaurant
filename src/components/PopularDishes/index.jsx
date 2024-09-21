/* eslint-disable react/no-unescaped-entities */
import img1 from "../../assets/images/popular-dishes/Image.png";
import img2 from "../../assets/images/popular-dishes/Image (1).png";
import img3 from "../../assets/images/popular-dishes/Image (2).png";
import img4 from "../../assets/images/popular-dishes/Image (3).png";
const PopularDishes = () => {
  return (
    <div className="mb-40">
      <div className="container mx-auto mt-36 flex flex-col items-center">
        {/* section heading */}
        <div className="text-center w-[702px] mb-16">
          <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
            MENU
          </h3>
          <h2 className="font-bold text-[40px] my-3">Popular Dishes</h2>
          <p className="text-xl">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>
        {/* offer cards */}
        <div className="flex flex-row gap-7 justify-between w-full">
          {/* card 1 */}
          <div className="w-[321px]">
            <div className="mb-4">
              <img src={img1} alt="" />
            </div>
            <div className="">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-[30px] font-bold">Chicken Manjaro </h3>
                <p className="text-[30px] font-bold">$15</p>
              </div>
              <hr className="my-4" />
              <p className="text-xl">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="w-[321px]">
            <div className="mb-4">
              <img src={img2} alt="" />
            </div>
            <div className="">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-[30px] font-bold">Chicken Manjaro </h3>
                <p className="text-[30px] font-bold">$15</p>
              </div>
              <hr className="my-4" />
              <p className="text-xl">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="w-[321px]">
            <div className="mb-4">
              <img src={img3} alt="" />
            </div>
            <div className="">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-[30px] font-bold">Chicken Manjaro </h3>
                <p className="text-[30px] font-bold">$15</p>
              </div>
              <hr className="my-4" />
              <p className="text-xl">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="w-[321px]">
            <div className="mb-4">
              <img src={img4} alt="" />
            </div>
            <div className="">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-[30px] font-bold">Chicken Manjaro </h3>
                <p className="text-[30px] font-bold">$15</p>
              </div>
              <hr className="my-4" />
              <p className="text-xl">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
