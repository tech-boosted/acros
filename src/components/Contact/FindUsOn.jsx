import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="w-[70vw] m-auto h-screen flex items-center">
      <div className="h-[80vh] w-full rounded-[30px] bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-8 px-12 text-white">
        <div className="h-[60%] font-bold text-[85px]">
          <p>
            Find us on
            <br /> various platforms
          </p>
        </div>
        <div className="flex justify-end px-20 gap-12">
          <div className="flex-col">
            <p className="text-[18px] mb-6">/Email us here/</p>
            <p className="text-[22px]">hello@across.co</p>
          </div>
          <div className="flex-col">
            <p className="text-[18px] mb-6">/Call us here/</p>
            <p className="text-[22px]">+91 {"  "} 7093496194</p>
          </div>
          <div className="flex-col">
            <p className="text-[18px] mb-6">/Find us on/</p>
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
