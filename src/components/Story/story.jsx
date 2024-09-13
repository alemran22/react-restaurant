import StoryImage from "../../assets/images/story-iamge.svg";
import StorySig from "../../assets/images/story-signature.svg";
const Story = () => {
  return (
    <div className=" bg-[#FFF8F5] pt-16 pb-20">
      <div className="container mx-auto flex flex-row justify-between ">
        {/* left */}
        <div className="w-full ">
          <img src={StoryImage} alt="" className="border-r-4 pr-14" />
        </div>
        {/* right */}
        <div className="w-full">
          <div className="pb-3">
            <h1 className="text-3xl font-bold py-2">The Story</h1>
            <p className="text-xl">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere',
              makinlook like readable English. Many desktop publishing packages.
            </p>
          </div>
          <div className="flex flex-row justify-between items-center py-3">
            <div className="">
              <h1 className="text-3xl font-bold py-2">1996</h1>
              <p className="text-xl">
                Lorem Ipsum is that it has a more-or-less normal Content content
              </p>
            </div>
            <div className="py-3">
              <h1 className="text-3xl font-bold py-2">2021</h1>
              <p className="text-xl">
                Lorem Ipsum is that it has a more-or-less normal distribution
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-xl font-bold py-2">JOSEFINE</h1>
            <img src={StorySig} alt="" className="py-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
