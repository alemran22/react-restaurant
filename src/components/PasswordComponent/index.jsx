const PasswordSection = () => {
  return (
    <div className="max-w-4xl w-full mx-auto my-40 bg-[#FFF8F5] md:p-20 border border-[#E1B168]">
      {/* top section */}
      <div className="flex flex-col items-center gap-5 mb-7">
        <div className="">
          <img
            src="https://i.ibb.co.com/z5JWdXx/Lock.png"
            alt=""
            className=""
          />
        </div>
        <div className="text-center">
          <h2 className="text-[40px] font-bold mb-3">Protected Page</h2>
          <p className="text-xl">
            This page is password protected. If you are the website admin, or
            have access to this page, please type your password below.
          </p>
        </div>
      </div>
      {/* form section*/}
      <div className="w-full md:w-1/2 mx-auto justify-center">
        <form action="" className=" flex flex-col gap-4 md:gap-7 w-full">
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
            className="w-full py-5 pl-4 text-2xl font-medium outline-none text-black placeholder:text-black border-2 border-black"
          />
          <input
            type="submit"
            value="Submit"
            placeholder="Submit"
            className="bg-[#E1B168] py-5 text-2xl font-medium w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordSection;
