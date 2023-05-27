import React from "react";

const Connect = () => {
  return (
    <div className="w-full text-desc-custom">
      <h2 className="md:text-title-custom text-title-custom-mv font-bold my-6">Let's talk</h2>
      <p className="text-subtitle-custom-mv md:text-subtitle-custom mb-10">Schedule a Meeting with the Experts</p>
      <div className="md:flex flex-cols gap-4 justify-between">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="*Your Name"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="*Email"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="*Phone Number"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
          <button className="md:w-[fit] w-[200px] py-3 md:py-2 rounded-[30px] md:h-[45px] bg-red-200 mb-5 m-auto ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
