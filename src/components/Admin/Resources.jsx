import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import ResourceUpdateForm from "./ResourceUpdateForm";
import ResourceNewForm from "./ResourceNewForm";
import { deleteMiddleware, getMiddleware } from "../../middleware";
const parse = require("html-react-parser");

const Resources = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [resources, setResources] = useState([]);

  const [formData, setFormData] = useState({
    type: "",
    description: "",
    shortDescription: "",
    imgSrc: "",
    title: "",
    date: "",
  });
  const [id, setId] = useState("");

  useEffect(() => {
    const callback = (res) => {
      setResources(res.data.resources);
    };
    getMiddleware("/resource/all", callback, true);
  }, []);

  const handleDelete = (item) => {
    const id = item._id;

    const callback = (res) => {
      alert(res.data.message);
    };
    deleteMiddleware(`/resource/${id}`, callback, true);
   
  };

  const handleUpdate = (item) => {
    const obj = {
      type: item.type,
      description: item.description,
      shortDescription: item.shortDescription,
      imgSrc: item.imgSrc,
      title: item.title,
      date: item.date,
    };
    setId(item._id);
    setFormData(obj);
    navigate("/admin/resources/update");
    window.scroll(0, 0);
  };

  return (
    <div>
      <Routes>
        <Route
          path={"/update"}
          element={
            <ResourceUpdateForm
              formData={formData}
              setFormData={setFormData}
              id={id}
            />
          }
        />
        <Route
          path={"/new"}
          element={
            <ResourceNewForm
              formData={formData}
              setFormData={setFormData}
              id={id}
            />
          }
        />
      </Routes>
      <h2 className="text-title-custom font-satoshi-bold my-10 text-left">
        Resources
      </h2>

      <button
        className={`flex items-center ${
          location.pathname.includes("/career")
            ? "bg-primary text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1"
            : "text-primary border border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        }`}
        onClick={() => {
          navigate("/admin/resources/new");
        }}
      >
        <span className="font-satoshi-bold text-[26px]">+</span> &nbsp; Create
        New Resource
      </button>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Resources Data
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      className={`break-words px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider`}
                    >
                      Type
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Image
                    </th>
                    <th className=" break-words px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Title
                    </th>
                    <th className=" break-words px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>

                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Short description
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Update
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resources.map((item, index) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-blue-600 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">{item.type}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src={item.imgSrc}
                            alt="Oops!!"
                          />
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item.title}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {item.date}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap  overflow-y-scroll max-h-[300px]">
                          {item.shortDescription}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap   overflow-y-scroll max-h-[300px]">
                          {parse(item.description)}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <span
                          className="relative inline-block px-3 py-1 font-semibold text-yellow-600 leading-tight cursor-pointer"
                          onClick={() => handleUpdate(item)}
                        >
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Update</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <span
                          className="relative inline-block px-3 py-1 font-semibold text-red-600 leading-tight cursor-pointer"
                          onClick={() => handleDelete(item)}
                        >
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Delete</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
