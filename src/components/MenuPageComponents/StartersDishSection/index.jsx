import { useEffect, useState } from "react";
import { menuItemData } from "../../../constant/menu_constant";
import MenuList from "../../MenuSection/MenuList";
import OutlineButton from "../../OutlineButton";

const StartersSection = () => {
  const [starters, setStarters] = useState([]);
  useEffect(() => {
    const st = menuItemData.filter((item) => item.category === "Starters");
    setStarters(st);
  }, []);
  return (
    <div className="">
      <div className="container p-5 md:p-0 my-8 md:my-48 bg-white mx-auto flex flex-col md:flex-row md:gap-12 md:justify-between ">
        {/* left img*/}
        <div className="md:w-2/5 w-full mt-12">
          <img
            src="https://i.ibb.co.com/c6PPCfR/Image-30.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        {/* right dish*/}
        <div className="md:w-3/5 w-full">
          <div className="">
            {/* starter dish component */}
            <MenuList heading={"Starters"} items={starters} />
            {/* button */}
            <div className="text-center md:mt-16">
              <OutlineButton title={"See All Dishes"} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="https://i.ibb.co.com/ns2h7TZ/Image-31.png"
          alt=""
          className="object-cover w-full h-[250px] md:h-[450px]"
        />
      </div>
    </div>
  );
};

export default StartersSection;
