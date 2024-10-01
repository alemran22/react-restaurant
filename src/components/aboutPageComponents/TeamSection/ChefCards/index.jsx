/* eslint-disable react/prop-types */
const ChefCard = ({ img, title, designation }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-6">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-lg md:text-xl ">{designation}</p>
      </div>
    </div>
  );
};

export default ChefCard;
