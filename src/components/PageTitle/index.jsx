/* eslint-disable react/prop-types */
const PageTitle = ({ title }) => {
  return (
    <div className="bg-[#292E36]">
      <div className="container mx-auto text-center">
        <h1 className="font-bold text-6xl text-white">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
