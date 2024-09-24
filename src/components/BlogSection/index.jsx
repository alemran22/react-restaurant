/* eslint-disable react/no-unescaped-entities */
import image1 from "../../assets/images/blog/Image.png";
import image2 from "../../assets/images/blog/Photo.png";
import OutlineButton from "../OutlineButton";
const BlogSection = () => {
  return (
    <div className="container mx-auto my-10 md:my-48 flex flex-col items-center gap-14 p-5 md:p-0">
      {/* section heading */}
      <div className="text-center w-full md:w-[702px]">
        <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
          BLOG
        </h3>
        <h2 className="font-bold text-2xl md:text-[40px] my-3">
          Be First Who Read News
        </h2>
        <p className="text-lg md:text-xl">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making.
        </p>
      </div>
      {/* Blog Cards */}
      <div className="flex flex-col md:flex-row gap-7 justify-between w-full">
        {/* card 1 */}
        <div className="w-full">
          {/* card image */}
          <div className="w-full">
            <img src={image1} alt="" className="w-full" />
          </div>
          {/* card details */}
          <div className="border border-t-0 border-[#555555] w-full py-3 text-center md:text-start md:py-11 px-4 md:px-10">
            <div className="flex flex-row gap-5">
              <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
                Restaurants
              </h3>
              <h4 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
                Feb 22, 2022
              </h4>
            </div>
            <h2 className="font-bold text-2xl md:text-[40px] leading-tight my-4">
              The Most Popular Delicious Food Of Mediterranean Cuisine
            </h2>
            <p className="text-lg md:text-xl">
              Capitalize on low-hanging fruit to identify a ballpark value added
              matrix economically and the creative activity to beta test
              override the food quality.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full">
          {/* card image */}
          <div className="w-full relative ">
            <img src={image2} alt="" className="w-full " />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <OutlineButton title={"View More"} className="" />
            </div>
          </div>
          {/* card details */}
          <div className="text-center md:text-start border border-t-0 border-[#555555] w-full py-3 md:py-11 px-4 md:px-10">
            <div className="flex flex-row gap-5">
              <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
                Restaurants
              </h3>
              <h4 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
                Feb 22, 2022
              </h4>
            </div>
            <h2 className="font-bold text-2xl md:text-[40px] my-4 leading-tight">
              Elegant Dessert: 10 Tips How to Make It at Home
            </h2>
            <p className="text-lg md:text-xl">
              Capitalize on low-hanging fruit to identify a ballpark value added
              matrix economically and the creative activity to beta test
              override the food quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
