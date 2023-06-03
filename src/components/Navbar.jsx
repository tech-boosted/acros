import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";
import { RiArrowDropDownFill } from "react-icons/ri";
import navlogo from "../assests/acros-media/across-nav-logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState("hidden");
  const [dropdownMV, setDropdownMV] = useState("hidden");
  const Links = [
    { name: "About Us", link: "/about-us" },
    { name: "Resources", link: "/resources" },
    // { name: "Services", link: "/services" },
    { name: "Career", link: "/career" },
    { name: "Contact", link: "/contact-us" },
  ];
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };


  const renderMobileList = () => {
    if (open) {
      return (
        <ul className="absolute w-full h-[400px]   flex-col pt-5 bg-white items-center z-[999]  transition-all duration-500 ease-in ">
          {Links.map((link) => (
            <Link
              to={link.link}
              className={`text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium                 
             ${
               activeRoute(link.link) === true
                 ? " text-primary"
                 : "font-medium text-slate-950"
             }
`}
            >
              <li
                key={link.name}
                className=" pt-2"
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </li>
            </Link>
          ))}
          <li
            className="bg-white pt-2 transform transition-all ease-in-out mb-10"
            onClick={() => {
              dropdownMV === "hidden"
                ? setDropdownMV("block")
                : setDropdownMV("hidden");
            }}
          >
            <span
              className={`text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium flex items-center
              `}
            >
              Services <RiArrowDropDownFill className="text-2xl" />
            </span>
            <ul
              className={`${dropdownMV} dropdown  text-white my-4 bg-primary shadow-xl w-[90%] h-fit rounded-lg  text-[16px] py-2`}
            >
              <li
                className={` hover:bg-white px-8 py-2 hover:text-purple-700
                              ${
                                activeRoute("/agency") === true
                                  ? " text-primary bg-white"
                                  : "font-medium text-white"
                              }
              
              `}
              >
                <Link
                  to={"/agency"}
                  className="hover:text-primary duration-200 font-satoshi-medium"
                >
                  Agency
                </Link>
              </li>
              <li
                className={` hover:bg-white px-8 py-2 hover:text-purple-700
                              ${
                                activeRoute("/operations") === true
                                  ? " text-primary bg-white"
                                  : "font-medium text-white"
                              }
              
              `}
              >
                <Link
                  to={"/operations"}
                  className=" hover:text-primary  duration-200 font-satoshi-medium"
                >
                  Operations
                </Link>
              </li>
              <li
                className={` hover:bg-white px-8 py-2 hover:text-purple-700
                              ${
                                activeRoute("/technology") === true
                                  ? " text-primary bg-white"
                                  : "font-medium text-white"
                              }
              
              `}
              >
                <Link
                  to={"/technology"}
                  className=" hover:text-primary  duration-200 font-satoshi-medium"
                >
                  Technology
                </Link>
              </li>
            </ul>{" "}
          </li>
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
          {/* 🔥🔥 services rendering as it contains dropdown on hover */}
          <li
            className="relative bg-white md:ml-8 "
            onMouseOver={() => {
              setDropdown("block");
            }}
            onMouseLeave={() => {
              setDropdown("hidden");
            }}
          >
            <span className="text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium cursor-pointer flex items-center">
              Services <RiArrowDropDownFill className="text-2xl" />
            </span>

            <ul
              className={`z-[50] dropdown absolute text-white bg-primary shadow-xl w-fit h-fit rounded-lg  right-[10%]  ${dropdown} text-[16px] py-2`}
            >
              <Link
                to={"/agency"}
                className="hover:text-primary duration-200 font-satoshi-medium"
              >
                <li
                  className={` hover:bg-white px-8 py-2 hover:text-purple-700
                              ${
                                activeRoute("/agency") === true
                                  ? " text-primary bg-white"
                                  : "font-medium text-white"
                              }
              
              `}
                >
                  Agency
                </li>
              </Link>
              <Link
                to={"/operations"}
                className=" hover:text-primary  duration-200 font-satoshi-medium"
              >
                <li
                  className={` hover:bg-white px-8 py-2 hover:text-purple-700
                              ${
                                activeRoute("/operations") === true
                                  ? " text-primary bg-white"
                                  : "font-medium text-white"
                              }
              
              `}
                >
                  Operations
                </li>
              </Link>
              <Link
                to={"/technology"}
                className=" hover:text-primary  duration-200 font-satoshi-medium"
              >
                <li
                  className={` hover:bg-white px-8 py-2 hover:text-purple-700
                              ${
                                activeRoute("/other") === true
                                  ? " text-primary bg-white"
                                  : "font-medium text-white"
                              }
              
              `}
                >
                  Technology{" "}
                </li>
              </Link>
            </ul>
          </li>

          <Link
            to={"/about-us"}
            className={`text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium
              ${
                activeRoute("/about-us") === true
                  ? " text-primary"
                  : "font-medium text-slate-950"
              }

              `}
          >
            <li className="bg-white md:ml-8">{"About us"}</li>
          </Link>
          <Link
            to={"/resources"}
            className={`text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium
              ${
                activeRoute("/resources") === true
                  ? " text-primary"
                  : "font-medium text-slate-950"
              }

              `}
          >
            <li className="bg-white md:ml-8">{"Resources"}</li>
          </Link>
          <Link
            to={"/career"}
            className={`text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium
              ${
                activeRoute("/career") === true
                  ? " text-primary"
                  : "font-medium text-slate-950"
              }

              `}
          >
            <li className="bg-white md:ml-8">{"Career"}</li>
          </Link>

          <Link
            to={"/contact-us"}
            className={`text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium
              ${
                activeRoute("/contact-us") === true
                  ? " text-primary"
                  : "font-medium text-slate-950"
              }

              `}
          >
            <li className="bg-white md:ml-8">{"Contact"}</li>
          </Link>
        </ul>

        {renderMobileList()}
      </div>
    </div>
  );
};

export default Navbar;
