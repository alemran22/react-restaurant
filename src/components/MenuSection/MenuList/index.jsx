/* eslint-disable react/prop-types */
const MenuList = ({ heading, items }) => {
  return (
    <div className=" mt-12">
      <h2 className="font-bold text-[40px] ">{heading}</h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-row items-center justify-between gap-3 mt-12"
        >
          <div className="w-[12%]">
            <img src={item.img} alt="" className="w-full rounded-full" />
          </div>
          <div className="w-[80%]">
            <h3 className="text-[30px] font-bold">{item.title}</h3>
            <div className="flex flex-row ">
              <p className="text-[20px] w-full">{item.description}</p>
              <div className="flex flex-row items-center justify-between w-full gap-1">
                <div className="h-3 w-3 rounded-full bg-[#C4C4C4]"></div>
                <div className="w-full border-t-4 border-dashed border-[#C4C4C4]"></div>
                <div className="h-3 w-3 rounded-full bg-[#C4C4C4]"></div>
              </div>
            </div>
          </div>
          <div className="w-[8%] text-[30px] font-bold flex">${item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
