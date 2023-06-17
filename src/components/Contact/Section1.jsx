import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className="w-screen  h-fit  md:mt-24 mt-[20%] mb-10 flex md:flex-row flex-col  items-center md:text-desc-custom text-[12px]">
      <div className="h-fit w-full  bg-[url('https://res.cloudinary.com/dfwvu60ef/image/upload/v1686093632/bkg_1_bjjncw.jpg')] py-8  text-black ">
        <div className="h-[60%] pl-[10%] font-bold text-title-large  font-satoshi-bold">
          <p>
            Find us on
            <br /> various platforms
          </p>
        </div>
        <div className="flex md:justify-end mx-[10%] pr-[10%]  md:gap-12 gap-6 md:mt-0 mt-10">
          <div className="flex-col">
            <p className=" mb-6 font-satoshi-bold text-subtitle-custom">
              /Email us here/</p>
            <p className="cursor-pointer">
              <a href="mailto: hello@across.co" target="_blank">
                hello@across.co
              </a>
            </p>
          </div>
          <div className="flex-col">
          <p className=" mb-6 font-satoshi-bold text-subtitle-custom">
              /Call us here/</p>
            <p className="">+91 {"  "} 7093496194</p>
          </div>
          <div className="flex-col">
          <p className=" mb-6 font-satoshi-bold text-subtitle-custom">
              /Find us on/</p>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/people/Acros/100066930852884/"
              className="flex items-center gap-4  cursor-pointer  mb-2"
            >
              <FaFacebook className="text-center text-[22px]" />
              {" Facebook"}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/acros.advertising/"
              className="flex items-center gap-4  cursor-pointer  mb-2 "
            >
              <BsInstagram className="text-center text-[22px] " /> {"Instagram"}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/acros-advertising/"
              className="flex items-center gap-4  cursor-pointer  mb-2"
            >
              <AiFillLinkedin className="text-center text-[22px] " />
              {"LinkedIn"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
