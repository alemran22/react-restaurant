import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import sliderImg1 from "../assets/images/testimonial/Image.png";
import sliderImg2 from "../assets/images/testimonial/Image (1).png";
import sliderImg3 from "../assets/images/testimonial/Image (2).png";
const storyList = [
  {
    id: "locate-us",
    icon: CiLocationOn,
    title: "Locate Us",
    description: "Riverside 25, San Francisco, California",
  },
  {
    id: "open-hours",
    icon: MdOutlineSpeed,
    title: "Open Hours",
    description: "Mon To Fri 9:00 AM - 9:00 PM",
  },
  {
    id: "reservation",
    icon: RiFileList3Line,
    title: "Reservation",
    description: "hirestaurantate@gmail.com",
  },
];

const testimonialSliderData = [
  {
    id: 1,
    img: sliderImg1,
    title: "Daniyal Sppra",
    city: "Newyork",
    description:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
  },
  {
    id: 2,
    img: sliderImg2,
    title: "Natasha D",
    city: "Salt Lake City",
    description:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages.",
  },
  {
    id: 3,
    img: sliderImg3,
    title: "Jack Sparrow",
    city: "San Diego",
    description:
      "It is professional, considers everyone's time, can think about the  There are many  passages whole probls small niche, friendly.",
  },
  {
    id: 4,
    img: sliderImg1,
    title: "Daniyal Sppra",
    city: "Newyork",
    description:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
  },
];
export { storyList, testimonialSliderData };
