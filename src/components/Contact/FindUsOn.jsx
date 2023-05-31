import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="w-full  h-fit  my-20 flex md:flex-row flex-col  items-center md:text-desc-custom text-[12px]">
      <div className="h-fit w-full rounded-[30px] bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-8 md:px-12 px-4 text-white">
        <div className="h-[60%] font-bold md:text-title-custom text-title-custom-mv font-satoshi-bold">
          <p>
            Find us on
            <br /> various platforms
          </p>
        </div>
        <div className="flex md:justify-end md:px-20 md:gap-12 gap-6 md:mt-0 mt-10">
          <div className="flex-col">
            <p className=" mb-6 font-satoshi-medium">/Email us here/</p>
            <p className="cursor-pointer">
            <a href = "mailto: hello@across.co" target="_blank">hello@across.co</a>

            </p>
          </div>
          <div className="flex-col">
            <p className=" mb-6 font-satoshi-medium">/Call us here/</p>
            <p className="">+91 {"  "} 7093496194</p>
          </div>
          <div className="flex-col">
            <p className=" mb-6 font-satoshi-medium">/Find us on/</p>
            
              <a target="blank" href="https://www.facebook.com/people/Acros/100066930852884/" className="flex items-center gap-4  cursor-pointer  mb-2" >

              <FaFacebook className="text-center text-[22px]" />
              {" Facebook"}
              </a>
              <a target="blank" href="https://www.instagram.com/acros.advertising/"  className="flex items-center gap-4  cursor-pointer  mb-2 ">

              <BsInstagram className="text-center text-[22px] " /> {"Instagram"}
              </a>
              <a target="blank" href="https://www.linkedin.com/company/acros-advertising/"  className="flex items-center gap-4  cursor-pointer  mb-2" >

              <AiFillLinkedin className="text-center text-[22px] " />{"LinkedIn"}
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
