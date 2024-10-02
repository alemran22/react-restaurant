import { useEffect, useState } from "react";
import { menuItemData } from "../../../constant/menu_constant";
import MenuList from "../../MenuSection/MenuList";
import OutlineButton from "../../OutlineButton";

const MainDish = () => {
  const [mainDishes, setMainDishes] = useState([]);
  useEffect(() => {
    const md = menuItemData.filter((item) => item.category === "Main Dish");
    setMainDishes(md);
  }, []);
  return (
    <div className="">
      <div className="container p-5 md:p-0 my-8 md:my-48 bg-white mx-auto flex flex-col-reverse md:flex-row md:gap-12 md:justify-between ">
        {/* left dish*/}
        <div className="md:w-3/5 w-full">
          <div className="">
            {/* starter dish component */}
            <MenuList heading={"Main Dish"} items={mainDishes} />
            {/* button */}
            <div className="text-center md:text-right md:mt-16">
              <OutlineButton title={"See All Dishes"} />
            </div>
          </div>
        </div>
        {/* right img*/}
        <div className="md:w-2/5 w-full mt-12">
          <img
            src="https://i.ibb.co.com/7Qyb2mL/Image-32.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* banner img*/}
      <div className="w-full">
        <img
          src="https://i.ibb.co.com/vqJQX59/Image-33.png"
          alt=""
          className="object-cover w-full h-[250px] md:h-[450px]"
        />
      </div>
    </div>
  );
};

export default MainDish;
