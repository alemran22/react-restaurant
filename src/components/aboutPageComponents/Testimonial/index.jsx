/* eslint-disable no-undef */
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialSliderData } from "../../../constant/home_constant";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
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
          <div className="container absolute left-1/2 -translate-x-1/2 top-16 translate-y-16 hidden md:flex justify-between items-center z-50">
            <button className="">
              <IoIosArrowBack
                className={"text-[#E1B168] text-5xl font-bold"}
                onClick={previous}
              />
            </button>
            <button className="">
              <IoIosArrowForward
                className={"text-[#E1B168] text-5xl font-bold"}
                onClick={next}
              />
            </button>
          </div>
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
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
