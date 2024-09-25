/* eslint-disable react/prop-types */
const MenuList = ({ heading, items }) => {
  return (
    <div className="mt-5 md:mt-12 mb-8 md:mb-0">
      <h2 className="font-bold text-2xl md:text-[40px] my-5 text-center md:text-start">
        {heading}
      </h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-center justify-between gap-3 md:mt-12"
        >
          <div className="md:w-[12%]">
            <img src={item.img} alt="" className="w-full rounded-full" />
          </div>
          <div className="md:w-[80%] w-full mb-10 md:mb-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl text-center md:text-start md:text-[30px] font-bold">
                {item.title}
              </h3>
              {/* mobile responsive price */}
              <div className="md:hidden md:w-[8%] text-xl md:text-[30px] font-bold ">
                ${item.price}
              </div>
            </div>
            <div className="flex flex-row ">
              <p className="text-sm md:text-[20px] w-full">
                {item.description}
              </p>
              <div className="md:flex flex-row items-center justify-between w-full gap-1 hidden ">
                <div className="h-3 w-3 rounded-full bg-[#C4C4C4]"></div>
                <div className="w-full border-t-4 border-dashed border-[#C4C4C4]"></div>
                <div className="h-3 w-3 rounded-full bg-[#C4C4C4]"></div>
              </div>
            </div>
          </div>
          <div className="hidden md:w-[8%] text-lg md:text-[30px] font-bold md:flex">
            ${item.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
