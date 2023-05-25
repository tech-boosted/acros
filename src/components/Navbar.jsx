import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import navlogo from "../assests/acros-media/across-nav-logo.png";
const Navbar = () => {
  let Links = [
    { name: "About Us", link: "/about-us" },
    { name: "Resources", link: "/resources" },
    { name: "Services", link: "/" },
    { name: "Career", link: "/" },
    { name: "Contact", link: "/contact-us" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md absolute top-0 fixed left-0 w-full  z-50 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <img src={navlogo} alt="Across logo" className="h-[30px]" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <GrMenu />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="bg-white md:ml-8 text-lg md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-theme-500 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
