import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="w-full md:h-screen h-fit md:m-auto my-20 flex md:flex-row flex-col  items-center md:text-desc-custom text-[12px]">
      <div className="h-fit w-full rounded-[30px] bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-8 md:px-12 px-4 text-white">
        <div className="h-[60%] font-bold md:text-title-custom text-title-custom-mv">
          <p>
            Find us on
            <br /> various platforms
          </p>
        </div>
        <div className="flex md:justify-end md:px-20 md:gap-12 gap-6 md:mt-0 mt-10">
          <div className="flex-col">
            <p className=" mb-6">/Email us here/</p>
            <p className="">hello@across.co</p>
          </div>
          <div className="flex-col">
            <p className=" mb-6">/Call us here/</p>
            <p className="">+91 {"  "} 7093496194</p>
          </div>
          <div className="flex-col">
            <p className=" mb-6">/Find us on/</p>
            <FaFacebook className="text-center text-[22px] mb-4 ml-8" />{" "}
            <BsInstagram className="text-center text-[22px] mb-4 ml-8" />
            <AiFillLinkedin className="text-center text-[22px] mb-4 ml-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
