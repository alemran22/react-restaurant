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
    <div className="flex flex-row container mx-auto py-48 gap-32">
      {/* menu title */}
      <div className="w-4/12">
        <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
          MENU
        </h3>
        <h2 className="font-bold text-[40px] my-3">Try Our Special Offers</h2>
        <p className="text-xl">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making it look
          like readable English.
        </p>
        <div className="my-10">
          <img src={MenuBanner} alt="" className="" />
        </div>
        <OutlineButton title={"See All Dishes"} />
      </div>
      {/* menu item */}
      <div className="w-8/12 flex flex-col gap-16">
        {/* starters */}
        <MenuList heading={"Starters"} items={starters} />
        <MenuList heading={"Main Dish"} items={mainDishes} />
        <MenuList heading={"Dessert"} items={desserts} />
      </div>
    </div>
  );
};

export default Menu;
