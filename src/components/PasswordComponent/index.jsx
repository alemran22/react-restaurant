const PasswordSection = () => {
  return (
    <div className="max-w-4xl w-fit md:mx-auto md:my-40 my-8 bg-[#FFF8F5] md:p-20 border border-[#E1B168] mx-3">
      {/* top section */}
      <div className=" w-full flex flex-col items-center gap-5 mb-7  ">
        <div className="flex flex-row justify-center items-center ">
          <img
            src="https://i.ibb.co.com/z5JWdXx/Lock.png"
            alt=""
            className="w-1/2 md:w-full"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-[40px] font-bold mb-3 md:mb-7">
            Protected Page
          </h2>
          <p className="text-base md:text-xl">
            This page is password protected. If you are the website admin, or
            have access to this page, please type your password below.
          </p>
        </div>
      </div>
      {/* form section*/}
      <div className="w-full md:w-1/2 mx-auto justify-center p-5 md:p-0">
        <form action="" className=" flex flex-col gap-4 md:gap-7 w-full">
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
            className="w-full py-2 md:py-5 pl-4 text-lg md:text-2xl font-medium border outline-none text-black placeholder:text-black  border-black"
          />
          <button
            className="bg-[#E1B168] py-2 md:py-5 text-xl md:text-2xl font-medium
            w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordSection;
