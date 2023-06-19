import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import strings from "../../strings";

const Section1 = () => {
  return (
    <div className="w-screen  h-fit  md:mt-32 mt-[20%] mb-10 flex md:flex-row flex-col  items-center md:text-desc-custom text-[12px]">
      <div className="h-fit w-full  bg-[url('https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fblue%20background.jpg?alt=media&token=2e85e984-90f7-43c4-893a-6a00910e9284')] py-8  text-black ">
        <div className="h-[60%] pl-[10%] font-bold text-title-large  font-satoshi-bold">
         <p>{strings.CONTACT_SECTION_1_TITLE}</p>
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
