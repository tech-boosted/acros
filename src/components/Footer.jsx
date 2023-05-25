import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import FooterLogo from "../assests/acros-media/white-footer-logo-300x59.png";
const Footer = () => {
  return (
    <div className="flex-col m-auto block rounded-[30px] md:h-[170px]  h-[350px] bg-gradient-to-r from-[#9B0BE4] to-[#492492] md:w-[70vw] w-[90vw] my-12 p-5 text-white ">
      <section className="flex md:flex-row flex-col h-[60%] justify-start md:items-center">
        <div className="md:w-[50%] w-[70%] md:my-0 my-5 mb-12">
          <img src={FooterLogo} alt="Across" />
        </div>
        <div className="md:w-[50%]  w-full items-center flex">
          <ul className="flex flex-wrap gap-4 w-full text-[19px] cursor-pointer">
            <li>Services</li>
            <li>About Us</li>
            <li>Resources</li>
            <li>Verticals</li>
            <li>Career</li>
          </ul>
        </div>
      </section>
      <section className="h-[40%] grid md:grid-cols-3 grid-cols-1 text-[18px]">
        <div></div>
        <div className="flex gap-4 items-center cursor-pointer ">
          <MdOutlineMail />
          <span>hello@across.co</span>
        </div>
        <div className="cursor-pointer flex text-white text-[18px] gap-4  mr-10 md:items-center">
          <FaFacebook />
          <BsInstagram />
          <AiFillLinkedin />
        </div>
      </section>
    </div>
  );
};

export default Footer;
