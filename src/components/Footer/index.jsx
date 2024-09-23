/* eslint-disable no-undef */
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../InputFields";
import Button from "../WhiteButton";

const Footer = () => {
  return (
    <div className="bg-[#292E36] ">
      <div className=" py-10  justify-between items-center text-white">
        {/* top section */}
        <div className="text-white flex flex-row justify-between w-full my-16 container mx-auto ">
          <div className="w-full flex items-center ">
            {/* left link */}
            <Link to={"#"} className="underline text-[22px] font-medium">
              Instagram Feed
            </Link>
          </div>
          {/* mid logo */}
          <div className="w-full flex items-center justify-center">
            <img src="/src/assets/images/Logo.svg" alt="" />
          </div>
          {/* right nav */}
          <div className="w-full flex flex-row items-center justify-end gap-5 text-white text-2xl">
            <Link to={"#"}>
              <FaInstagram />
            </Link>
            <Link to={"#"}>
              <FaFacebook />
            </Link>
            <Link to={"#"}>
              <FaTwitter />
            </Link>
            <Link to={"#"}>
              <FaPinterest />
            </Link>
          </div>
        </div>
        {/* middle section */}
        <div className="flex flex-row justify-between items-center my-16 container mx-auto">
          {/* left */}
          <div className="">
            <div className="flex flex-col gap-2 ">
              <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block uppercase mb-8">
                Contact
              </h3>
              <p className="text-xl">
                5 Rue Dalou, 75015 Paris <br />
                <span className="text-[#E1B168]">Call -</span> +33 156 78 89 56
                <br />
                <span className="text-[#E1B168]">benoit@mail.com</span>
              </p>
            </div>
          </div>
          {/* mid */}
          <div className="flex flex-col gap-8">
            <p className="text-xl text-center">
              Join our mailing list for updates, <br /> Get news & offers
              events.
            </p>
            <div className="flex flex-row items-center">
              <Input placeholder={"Email"} type={"email"} />
              <Button title={"Subscribe"} />
            </div>
          </div>
          {/* right */}
          <div className="text-right">
            <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block uppercase mb-8">
              Working hours
            </h3>
            <div className="flex flex-col gap-2 ">
              <p className="text-xl">
                <span className="text-[#E1B168]">Mon – Fri:</span> 7.00am –
                6.00pm <br />
                <span className="text-[#E1B168]">Sat:</span> 7.00am – 6.00pm{" "}
                <br />
                <span className="text-[#E1B168]">Sun:</span> 8.00am – 6.00pm
              </p>
            </div>
          </div>
        </div>
        <hr className="bg-[#575B62]" />
        {/* bottom section/ copyright */}
        <div className="flex flex-row justify-between items-center mt-8 container mx-auto">
          <h4 className="text-xl">
            &copy; Copyright - Restaurantate | Designed by
            <span className="text-[#E1B168]">VictorFlow</span> Templates -
            Powered by <span className="text-[#E1B168]">Webflow</span>
          </h4>
          <h5 className="text-xl">Styleguide / Licenses</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
