import OutlineButton from "../OutlineButton";
import MenuBanner from "../../assets/images/menu-img/menu-banner.jpg";
import MenuList from "./MenuList";
import { menuItemData } from "../../constant/menu_constant";
import { useEffect, useState } from "react";
/* eslint-disable react/no-unescaped-entities */

const Menu = () => {
  const [starters, setStarters] = useState([]);
  const [mainDishes, setMainDishes] = useState([]);
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const st = menuItemData.filter((item) => item.category === "Starters");
    const md = menuItemData.filter((item) => item.category === "Main Dish");
    const ds = menuItemData.filter((item) => item.category === "Dessert");
    setStarters(st);
    setMainDishes(md);
    setDesserts(ds);
  }, []);

  return (
    <div className="flex flex-col md:flex-row container mx-auto p-5 md:py-36 gap-6 md:gap-32">
      {/*left side/ menu title */}
      <div className="md:w-4/12 w-full text-center md:text-start">
        <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block ">
          MENU
        </h3>
        <h2 className="font-bold text-3xl md:text-[40px] my-3">
          Try Our Special Offers
        </h2>
        <div className="my-10 md:hidden">
          <img src={MenuBanner} alt="" className="" />
        </div>
        <p className="text-xl">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making it look
          like readable English.
        </p>
        <div className="my-10 hidden md:block">
          <img src={MenuBanner} alt="" className="" />
        </div>
        <div className="mt-8 md:mt-0">
          <OutlineButton title={"See All Dishes"} />
        </div>
      </div>
      {/* right side/ menu item */}
      <div className="w-full md:w-8/12 flex flex-col md:gap-16">
        {/* starters */}
        <MenuList heading={"Starters"} items={starters} />
        <MenuList heading={"Main Dish"} items={mainDishes} />
        <MenuList heading={"Dessert"} items={desserts} />
      </div>
    </div>
  );
};

export default Menu;
