/* eslint-disable no-undef */
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialSliderData } from "../../../constant/home_constant";
import { NextArrow, PrevArrow } from "../../../constant/customArrows";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="bg-[#292E36] my-8 md:my-48">
      <div className=" mx-auto p-5 md:p-0 md:py-24 text-center">
        {/* section heading */}
        <div className="text-white ">
          <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
            TESTIMONIAL
          </h3>
          <h2 className="font-bold text-2xl md:text-[40px] my-3">
            What our clients say
          </h2>
        </div>
        {/* Slider Container */}
        <div className="slider-container text-white relative bg-black md:bg-transparent z-10">
          {/* arrows */}
          <div className="container absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex justify-between items-center z-50">
            <PrevArrow
              className={"text-[#E1B168] text-5xl font-bold cursor-pointer"}
            />
            <NextArrow
              className={"text-[#E1B168] text-5xl font-bold cursor-pointer"}
            />
          </div>
          <Slider {...settings}>
            {testimonialSliderData.map((item) => (
              <div key={item.id} className="s">
                <TestimonialCard
                  img={item.img}
                  title={item.title}
                  city={item.city}
                  description={item.description}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
