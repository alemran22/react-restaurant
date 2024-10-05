import OutlineButton from "../OutlineButton";

/* eslint-disable react/no-unescaped-entities */
const Error404 = () => {
  return (
    <div className="mx-auto max-w-[1110px] my-8 md:my-48 flex flex-col gap-11">
      <div className="flex flex-row items-center ">
        <img src="https://i.ibb.co.com/XFDgfsL/4.png" alt="" className="" />
        <img
          src="https://i.ibb.co.com/429SP2r/Image-37.png"
          alt=""
          className=""
        />
        <img src="https://i.ibb.co.com/XFDgfsL/4.png" alt="" className="" />
      </div>
      {/* description */}
      <div className="text-center flex flex-col gap-12">
        <div className="">
          <h4 className="text-[50px] font-bold mb-7">
            Whoops, Nothing delicious to find here!
          </h4>
          <p className="text-2xl">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <OutlineButton title={"Back To Home"} />
      </div>
    </div>
  );
};

export default Error404;
