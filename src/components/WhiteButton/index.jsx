/* eslint-disable react/prop-types */

const Button = ({ title }) => {
  return (
    <button className="bg-white text-black text-[22px] font-medium py-[18px] px-12">
      {title}
    </button>
  );
};

export default Button;
