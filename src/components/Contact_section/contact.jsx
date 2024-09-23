import { storyList } from "../../constant/home_constant";
import StoryCard from "../Story/StoryCard";

const Contact = () => {
  return (
    <div className="bg-[#FFF8F5] md:mt-8">
      <div className="flex flex-col md:flex-row container mx-auto justify-between gap-16 pb-8 pt-12 md:pt-32 md:pb-16">
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
