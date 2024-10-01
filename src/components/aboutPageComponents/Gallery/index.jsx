import Card from "./Card";

const Gallery = () => {
  return (
    <div className="container mx-auto mb-10 md:mb-40 p-5 md:p-0">
      {/* section heading */}
      <div className="text-center md:my-14 mb-6">
        <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
          GALLERY
        </h3>
        <h2 className="font-bold text-2xl md:text-[40px] my-3">What We Make</h2>
      </div>
      {/* image container */}
      <div className="grid grid-cols-12 grid-rows-12 gap-2 md:gap-4 auto-cols-fr">
        <Card
          className={"col-span-6 md:col-span-3 row-span-12 md:row-span-6"}
          img={"https://i.ibb.co.com/Y80zgPr/Image-26.png"}
        />
        <Card
          className={"col-span-12 md:col-span-6 row-span-12"}
          img={"https://i.ibb.co.com/NYqRnYs/2-1.png"}
        />
        <Card
          className={"col-span-6 md:col-span-3 row-span-12 md:row-span-7"}
          img={"https://i.ibb.co.com/g7GBqkm/Image-27.png"}
        />
        <Card
          className={"col-span-6 md:col-span-3 row-span-12 md:row-span-6"}
          img={"https://i.ibb.co.com/V32ZzpL/Image-28.png"}
        />
        <Card
          className={"col-span-6 md:col-span-3 row-span-12 md:row-span-5"}
          img={"https://i.ibb.co.com/mGDpYXx/Image-29.png"}
        />
      </div>
    </div>
  );
};

export default Gallery;
