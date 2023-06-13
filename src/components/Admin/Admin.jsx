import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";
import Resources from "./Resources";
import Career from "./Career";
import { postMiddleware } from "../../middleware";
import FormPage from "./FormPage";

const Admin = () => {




  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-screen px-[10%]">
      <h2 className="text-title-custom font-satoshi-bold my-10 text-center">
        Admin Portal
      </h2>
      <div className="tabs flex justify-between">
        <div>
          <button
            className={` ${
              location.pathname.includes("/resources")
                ? "bg-primary text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1"
                : "text-primary border border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }`}
            onClick={() => {
              navigate("/admin/resources");
            }}
          >
            Resources
          </button>
          <button
            className={` ${
              location.pathname.includes("/career")
                ? "bg-primary text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1"
                : "text-primary border border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }`}
            onClick={() => {
              navigate("/admin/career");
            }}
          >
            Careers
          </button>
          <button
            className={` ${
              location.pathname.includes("/forms")
                ? "bg-primary text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1"
                : "text-primary border border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }`}
            onClick={() => {
              navigate("/admin/forms");
            }}
          >
            Forms
          </button>
        </div>

        <div>
          <button
            className={` ${
              location.pathname.includes("/forms")
                ? "bg-primary text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1"
                : "text-primary border border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }`}
            onClick={() => {
              const callback = (res) => {
                localStorage.removeItem("token");
                alert(res.data.message);
                navigate("/sign-in");

              };
              postMiddleware("/logout", {}, callback, true);
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <Routes>
        <Route path={"/career/*"} element={<Career />} />
        <Route path={"/resources/*"} element={<Resources />} />
        <Route path={"/forms/*"} element={<FormPage/>} />
      </Routes>
    </div>
  );
};

export default Admin;
