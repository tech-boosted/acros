import React, { useState } from "react";
import { postMiddleware } from "../../middleware";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const callback = (res) => {
      const token = res?.data?.token;
      if (token) {
        alert("logged In ");
        localStorage.setItem("token", token);
        navigate("/admin/resources");
      } else {
        alert("Invalid Credentials");
      }

    };

    postMiddleware("/login", formData, callback, false);
  };
  return (
    <div className="flex my-10 flex-col overflow-hidden mx-auto bg-white rounded-md shadow-2xl max md:flex-row md:flex-1 lg:max-w-screen-md">
      <div className="p-5 bg-white md:flex-1">
        <h3 className="my-4 text-2xl font-semibold text-gray-700">
          Account Login
        </h3>
        <form action="#" className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-1">
            <label for="email" className="text-sm font-semibold text-gray-500">
              ID
            </label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={(e) => {
                handleChange(e);
              }}
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="text-sm font-semibold text-gray-500"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => {
                handleChange(e);
              }}
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>

          <div>
            <button
              type="submit"
              onClick={(e) => {
                handleClick(e);
              }}
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#aa00ff] rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
