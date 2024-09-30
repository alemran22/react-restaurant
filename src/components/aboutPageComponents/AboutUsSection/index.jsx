/* eslint-disable react/no-unescaped-entities */
import BannerImage from "../../../assets/images/aboutPage/aboutUsBanner.png";
import SigImage from "../../../assets/images/story-signature.svg";
import AuthorImg from "../../../assets/images/aboutPage/AboutUsAuthor.png";
import { FaStar } from "react-icons/fa6";
import OutlineButton from "../../OutlineButton";

const AboutUs = () => {
  return (
    <div className=" bg-white my-5 md:my-48 p-5 md:p-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        {/* left */}
        <div className="w-5/12 flex flex-col justify-end text-center md:text-start">
          {/*section title */}
          <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block max-w-max my-4">
            ABOUT US
          </h3>
          <div className="pb-3">
            <h1 className="text-2xl md:text-4xl font-bold py-2">
              Quality and Tradition
            </h1>
            <p className="text-xl">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere',
              makinlook like readable English. Many desktop publishing packages.
            </p>
          </div>
          {/*name & signature */}
          <div className="flex flex-col items-center md:block gap-4">
            <h1 className="text-xl font-bold py-2">JOSEFINE</h1>
            <img src={SigImage} alt="" className="pt-1 md:py-3" />
          </div>
          {/* button */}
          <div className="my-4 md:my-0 md:mt-16">
            <OutlineButton title={"See More"} />
          </div>
        </div>
        {/*  right*/}
        <div className="w-7/12 relative mt-8 md:mt-0">
          <img src={BannerImage} alt="" className=" md:pl-14" />
          {/* author card */}
          <div className="block md:absolute -left-20 -bottom-28 drop-shadow-xl bg-white h-[258px] w-full md:w-[316px] my-8 md:my-0 p-8">
            <div className="flex flex-row gap-3 items-center mb-3">
              <div className="my-1">
                <img src={AuthorImg} alt="" className="" />
              </div>
              <div className="">
                <h4 className=" text-2xl md:text-3xl font-bold">Josefine</h4>
                <h6 className="text-lg md:text-xl">CEO & Founder</h6>
              </div>
            </div>
            <div className="">
              <p className="text-lg md:text-xl">
                Capitalize on low hanging fruit to identify a ballpark
              </p>
              <div className="text-[#E1B168] flex gap-1 my-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
