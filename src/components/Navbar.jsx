import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";
import navlogo from "../assests/acros-media/across-nav-logo.png";

const Navbar = () => {
  const Links = [
    { name: "About Us", link: "/about-us" },
    { name: "Resources", link: "/resources" },
    { name: "Services", link: "/services" },
    { name: "Career", link: "/career" },
    { name: "Contact", link: "/contact-us" },
  ];
  const [open, setOpen] = useState(false);

  const renderMobileList = () => {
    if (open) {
      return (
        <ul className="flex-col pt-5 bg-white items-center z-[999] w-full h-full w-auto transition-all duration-500 ease-in">
          {Links.map((link) => (
            <li key={link.name} className="bg-white pt-2" onClick={()=>setOpen(!open)}>
              <Link
                to={link.link}
                className="text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const renderIcon = () => {
    return (
      <div className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <GrClose /> : <GrMenu />}
        </button>
      </div>
    );
  };


  return (
    <div className="w-full z-50 ">
      <div className="md:flex items-center justify-between bg-white py-5 ">
        <div className="cursor-pointer flex items-center">
          <Link to="/">
            <img src={navlogo} alt="Across logo" className="w-3/4" />
          </Link>
        </div>
        {renderIcon()}

        <ul className="hidden md:flex md:items-center md:pb-0 md:static md:z-auto z-[10] w-full md:w-auto md:pl-0 transition-all duration-500 ease-in">
          {Links.map((link) => (
            <li key={link.name} className="bg-white md:ml-8">
              <Link
                to={link.link}
                className="text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {renderMobileList()}
      </div>
    </div>
  );
};

export default Navbar;
