import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdClose} from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import navlogo from "../assests/acros-media/across-nav-logo.png";
import navlogowhite from "../assests/acros-media/white-footer-logo.png";

const Navbar = () => {

  const Links = [
    { name: "Agency", link: "/agency" },
    { name: "About Us", link: "/about-us" },
    { name: "Resources", link: "/resources" },
    { name: "Career", link: "/career" },
    { name: "Contact", link: "/contact-us" },
  ];
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname === routeName;
  };

  const agencyStyle =
    activeRoute("/agency") || activeRoute("/") ? "text-white" : "";

  const renderMobileList = () => {
    if (open) {
      return (
        <ul className="absolute left-0 top-0 w-full overflow-x-hidden px-10 h-[400px] text-white   flex-col pt-5 bg-[rgba(0,0,0,0.9)] items-center z-[999]  transition-all duration-500 ease-in ">
          <li className=" w-full  text-right">
            {" "}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <MdClose className="text-4xl rounded-md text-white" />
              ) : (
                <HiMenu />
              )}
            </button>
          </li>
          {Links.map((link,index) => (
            <Link
              to={link.link}
              key={index}
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
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <></>
          ) : (
            <HiMenu className={`text-[40px] mt-4 ${agencyStyle}`} />
          )}
        </button>
      </div>
    );
  };
  var temp;
  if(activeRoute("/") ){
    temp = "py-5";
  }else{
    temp="py-10"
  }

  return (
    <div className="w-screen sticky bg-black z-50 top-0">
      <div className={" md:flex items-center justify-between bg-transparent px-12 "+temp}>
        <div className="cursor-pointer flex items-center">
          {!activeRoute("/agency") && !activeRoute("/") ? (
            <Link to="/">
              <img src={navlogo} alt="Across logo" className="w-3/4" />
            </Link>
          ) : (
            <Link to="/">
              <img src={navlogowhite} alt="Across logo" className="h-[30px]" />
            </Link>
          )}
        </div>
        {renderIcon()}

        <ul className="hidden md:flex md:items-center md:pb-0 md:static md:z-auto z-[10] w-full md:w-auto md:pl-0 transition-all duration-500 ease-in z-9999">
          {/* 🔥🔥 services rendering as it contains dropdown on hover */}
          {/* <li
            className="relative bg-transparent md:ml-8 "
            onMouseOver={() => {
              setDropdown("block");
            }}
            onMouseLeave={() => {
              setDropdown("hidden");
            }}
          >
            <span className={`text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium cursor-pointer flex items-center ${agencyStyle}`}>
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
                                  ? "text-primary bg-white"
                                  : "font-medium"
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
                  className={` hover:bg-white px-8 py-2 hover:text-purple-700 ${agencyStyle}
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
                  className={` hover:bg-white px-8 py-2 hover:text-purple-700 ${agencyStyle}
                              ${
                                activeRoute("/technology") === true
                                  ? " text-primary bg-white"
                                  : "font-medium text-white"
                              }
              
              `}
                >
                  Technology{" "}
                </li>
              </Link>
            </ul>
          </li> */}

          <Link
            to={"/agency"}
            className={`text-lg hover:text-primary text-slate-950 duration-200 font-satoshi-medium
              ${
                activeRoute("/agency") === true
                  ? " text-primary"
                  : "font-medium text-slate-950"
              }

              `}
          >
            <li className={`bg-transparent md:ml-8 ${agencyStyle}`}>Agency</li>
          </Link>

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
            <li className={`bg-transparent md:ml-8 ${agencyStyle}`}>
              {"About us"}
            </li>
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
            <li className={`bg-transparent md:ml-8 ${agencyStyle}`}>
              {"Resources"}
            </li>
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
            <li className={`bg-transparent md:ml-8 ${agencyStyle}`}>
              {"Career"}
            </li>
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
            <li className={`bg-transparent md:ml-8 ${agencyStyle}`}>
              {"Contact"}
            </li>
          </Link>
        </ul>

        {renderMobileList()}
      </div>
    </div>
  );
};

export default Navbar;
