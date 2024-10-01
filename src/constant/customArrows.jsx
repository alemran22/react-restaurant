/* eslint-disable react/prop-types */
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const PrevArrow = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
};
const NextArrow = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <SlArrowRight />
    </div>
  );
};
export { NextArrow, PrevArrow };
