import { chefsData } from "../../../constant/aboutUs";
import ChefCard from "./ChefCards";

const Team = () => {
  return (
    <div className="container mx-auto my-6 md:my-40 p-4">
      {/* section heading */}
      <div className="text-center md:my-14">
        <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
          TEAM
        </h3>
        <h2 className="font-bold text-2xl md:text-[40px] my-3">
          Meet Our Professional Chefs
        </h2>
      </div>
      {/* cards container */}
      <div className="flex flex-col md:flex-row gap-6 justify-around items-center ">
        {chefsData.map((item) => (
          <div className="" key={item.id}>
            <ChefCard
              designation={item.designation}
              img={item.img}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
