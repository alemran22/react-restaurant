/* eslint-disable react/prop-types */
const PageTitle = ({ title }) => {
  return (
    <div className="bg-[#292E36]">
      <div className="container mx-auto text-center py-10 md:py-24">
        <h1 className="font-bold text-2xl md:text-6xl text-white border-y border-[#E1B168] inline-block py-1">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageTitle;
