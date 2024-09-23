import Input from "../InputFields";
import Button from "../WhiteButton";

/* eslint-disable react/no-unescaped-entities */
const Reservation = () => {
  return (
    <div className={`bg-reservation-Bg py-48`}>
      <form
        action=""
        className="max-w-5xl w-full mx-auto bg-[#292E36]/95 text-white py-36 px-40"
      >
        {/* section heading */}
        <div className="text-center w-[702px]">
          <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block">
            RESERVATION
          </h3>
          <h2 className="font-bold text-[40px] my-3">Book Your Table Now</h2>
        </div>
        {/* Form Inputs */}
        <div className="grid grid-cols-12 gap-7 ">
          <Input className={"col-span-6"} placeholder={"Name"} type={"text"} />
          <Input
            className={"col-span-6"}
            placeholder={"Email"}
            type={"email"}
          />
          <Input
            className={"col-span-4"}
            placeholder={"Person"}
            type={"number"}
          />
          <Input
            className={"col-span-4 invert text-black"}
            placeholder={"Time"}
            type={"time"}
          />
          <Input
            className={"col-span-4 invert text-black"}
            placeholder={"Date"}
            type={"date"}
          />
        </div>
        <div className="py-8 text-center">
          <Button title={"Book a Table"} />
        </div>
      </form>
    </div>
  );
};

export default Reservation;
