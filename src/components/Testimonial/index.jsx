/* eslint-disable no-dupe-keys */
import { testimonialSliderData } from "../../constant/home_constant";
import TestimonialCard from "./TestimonialCard";
import Banner from "../../assets/images/testimonial/testimonialBanner.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
/* eslint-disable react/no-unescaped-entities */
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="bg-[#292E36]">
      <div className="container mx-auto py-24">
        {/* section heading */}
        <div className="text-white mb-7">
          <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
            TESTIMONIAL
          </h3>
          <h2 className="font-bold text-[40px] my-3">What our clients say</h2>
          <p className="text-xl">
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </p>
        </div>
        {/* Slider Container */}
        <div className="slider-container">
          <Slider {...settings}>
            {testimonialSliderData.map((item) => (
              <div key={item.id} className="ml-10 -translate-x-10">
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
      {/* bannerImage */}
      <div className="h-[600px] w-full">
        <img src={Banner} alt="" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Testimonial;
