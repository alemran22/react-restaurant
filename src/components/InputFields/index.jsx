/* eslint-disable react/prop-types */

const Input = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      name=""
      id=""
      placeholder={placeholder}
      className={`p-5 bg-transparent border border-[#858585]  text-xl font-medium outline-none ${className}`}
    />
  );
};

export default Input;
