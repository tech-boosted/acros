import React from "react";

const AlternateForm = () => {
  return (
    <div>
      <div className="text-center my-10 w-full">
        <h2 className="text-title-custom-mv md:text-title-custom ">
          {" "}
          Alternatively
        </h2>
        <p className="text-subtitle-custom-mv md:text-subtitle-custom">
          Connect with us by simply filling a form. This will allow us to know
          more about yourself and your brand.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-10 gap-y-8">
          <input
            type="text"
            name=""
            id=""
            placeholder="*Your Name"
            className="py-3 px-5 border-b focus:outline-none border-gray-800 "
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="*Email"
            className="py-3 px-5 border-b focus:outline-none border-gray-800 "
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="*Phone Number"
            className="py-3 px-5 border-b focus:outline-none border-gray-800 "
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Tell us about your brand"
            className="py-3 px-5 border-b focus:outline-none border-gray-800 md:col-span-2 "
          ></textarea>
          <input
            type="text"
            name=""
            id=""
            placeholder="Website (if available)"
            className="py-3 px-5 border-b focus:outline-none border-gray-800 "
          />

          <input
            type="submit"
            value="Submit"
            className="md:col-span-3 w-fit m-auto my-8 rounded-full bg-purple-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 block"
          />
        </div>
      </div>
    </div>
  );
};

export default AlternateForm;
