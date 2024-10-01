/* eslint-disable react/prop-types */
const Card = ({ className, img }) => {
  return (
    <div className={className}>
      <img src={img} alt="" className="object-cover h-full w-full" />
    </div>
  );
};

export default Card;
