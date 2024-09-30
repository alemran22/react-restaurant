/* eslint-disable react/no-unescaped-entities */
const Story = () => {
  return (
    <div className=" bg-[#FFF8F5] pt-16 pb-20 px-5 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        {/* left */}
        <div className="w-full ">
          <img
            src="https://i.ibb.co.com/9t7rRG1/Image-1.png"
            alt=""
            className="md:border-r-4 md:pr-14"
          />
        </div>
        {/* right */}
        <div className="w-full text-center md:text-start">
          <div className="pb-3">
            <h1 className="text-3xl font-bold py-2">The Story</h1>
            <p className="text-xl">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere',
              makinlook like readable English. Many desktop publishing packages.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center py-3">
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
          <div className="flex flex-col items-center md:block">
            <h1 className="text-xl font-bold py-2">JOSEFINE</h1>
            <img
              src="https://i.ibb.co.com/hgMXqfK/Josefine.png"
              alt=""
              className="py-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
