import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import FooterLogo from "../assests/acros-media/white-footer-logo-300x59.png";
const Footer = () => {
  return (
    <div className="flex-col  rounded-[30px] md:h-[170px]  h-[370px] bg-gradient-to-r from-[#9B0BE4] to-[#492492] w-full my-12 p-5 text-white text-desc-custom">
      <section className="flex md:flex-row flex-col h-[60%] justify-start md:items-center">
        <div className="md:w-[50%] w-[100%]  md:my-0 my-5 mb-12">
          <img src={FooterLogo} alt="Across" />
        </div>
        <div className="md:w-[50%]  w-[50%] items-center flex mb-[20px]">
          <ul className="flex md:flex-row flex-col flex-wrap gap-4 w-full justify-end pr-10 cursor-pointer">
            <li>Services</li>
            <li>About Us</li>
            <li>Resources</li>
            <li>Verticals</li>
            <li>Career</li>
          </ul>
        </div>
      </section>
      <section className="h-[40%]    flex md:flex-row flex-col justify-start gap-8 items-end">
        <div>
        <div className="flex gap-4 items-center cursor-pointer ">
          <MdOutlineMail />
          <span>hello@across.co</span>
        </div>

        </div>
        <div className="cursor-pointer flex text-white  gap-4  mr-10 md:items-center">
          <FaFacebook />
          <BsInstagram />
          <AiFillLinkedin />
        </div>
      </section>
    </div>
  );
};

export default Footer;
