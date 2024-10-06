import OutlineButton from "../OutlineButton";

/* eslint-disable react/no-unescaped-entities */
const Error404 = () => {
  return (
    <div className="mx-auto max-w-[1110px] p-5 md:p-0 my-8 md:my-48 flex flex-col gap-11">
      <div className="flex flex-row items-center justify-center gap-2">
        <h5 className="text-9xl md:text-[620px] font-semibold">4</h5>
        <div className="w-24 md:w-[436px]">
          <img
            src="https://i.ibb.co.com/429SP2r/Image-37.png"
            alt=""
            className="w-full"
          />
        </div>
        <h5 className="text-9xl md:text-[620px] font-semibold">4</h5>
      </div>
      {/* description */}
      <div className="text-center flex flex-col gap-4 md:gap-12">
        <div className="">
          <h4 className="text-2xl md:text-[50px] font-bold mb-2 md:mb-7">
            Whoops, Nothing delicious to find here!
          </h4>
          <p className="text-lg md:text-2xl">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <OutlineButton title={"Back To Home"} />
      </div>
    </div>
  );
};

export default Error404;
