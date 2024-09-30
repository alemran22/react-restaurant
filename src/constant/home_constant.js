import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";

const contactList = [
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
    img: "https://i.ibb.co.com/k2nRZPQ/Image-13.png",
    title: "Daniyal Sppra",
    city: "Newyork",
    description:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/PxQ3MYK/Image-14.png",
    title: "Natasha D",
    city: "Salt Lake City",
    description:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages.",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/CWFyB7b/Image-15.png",
    title: "Jack Sparrow",
    city: "San Diego",
    description:
      "It is professional, considers everyone's time, can think about the  There are many  passages whole probls small niche, friendly.",
  },
  {
    id: 4,
    img: "https://i.ibb.co.com/k2nRZPQ/Image-13.png",
    title: "Daniyal Sppra",
    city: "Newyork",
    description:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
  },
];
const navItem = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Menu", path: "/menu" },
  { id: 4, title: "Reservation", path: "/reservation" },
  { id: 5, title: "Gallery", path: "/gallery" },
  { id: 6, title: "Blog", path: "/blog" },
  { id: 7, title: "Contact", path: "/contact" },
];
export { contactList, testimonialSliderData, navItem };
