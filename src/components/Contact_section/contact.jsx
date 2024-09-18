import { storyList } from "../../constant/home_constant";
import StoryCard from "../Story/StoryCard";

const Contact = () => {
  return (
    <div className="bg-[#FFF8F5]">
      <div className="flex flex-row container mx-auto justify-between  pt-28 pb-16">
        {/* item 1 */}
        {storyList.map((item) => (
          <StoryCard
            key={item.id}
            description={item.description}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
