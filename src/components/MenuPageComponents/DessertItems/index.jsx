import { useEffect, useState } from "react";
import { menuItemData } from "../../../constant/menu_constant";
import MenuList from "../../MenuSection/MenuList";
import OutlineButton from "../../OutlineButton";

const DessertItems = () => {
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    const ds = menuItemData.filter((item) => item.category === "Dessert");
    setDesserts(ds);
  }, []);
  return (
    <div className="">
      <div className="container p-5 md:p-0 my-8 md:my-48 bg-white mx-auto flex flex-col md:flex-row md:gap-12 md:justify-between ">
        {/* left img*/}
        <div className="md:w-2/5 w-full mt-12">
          <img
            src="https://i.ibb.co.com/Px5Nvt6/Image-34.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        {/* right dish*/}
        <div className="md:w-3/5 w-full">
          <div className="">
            {/* starter dish component */}
            <MenuList heading={"Dessert"} items={desserts} />
            {/* button */}
            <div className=" md:mt-16 text-center">
              <OutlineButton title={"See All Dishes"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DessertItems;
