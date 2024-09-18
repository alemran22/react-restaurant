/* eslint-disable react/prop-types */
const StoryCard = ({ title, icon, description }) => {
  return (
    <div className="flex flex-row gap-4 items-center ">
      <div className="text-4xl text-white bg-black p-4 rounded-full ">
        {icon()}
      </div>
      <div className=" ">
        <h1 className="text-3xl font-bold py-2">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default StoryCard;
