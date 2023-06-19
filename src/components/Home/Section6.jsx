import React from "react";
import strings from "../../strings";
import logo from "../../assests/acros-media/section6.png";
const Section6 = () => {
  return (
    <div className="w-screen">
      <div className=" flex md:flex-row flex-col items-center justify-center text-desc-custom md:w-[92%] w-[90%]  rounded-[30px] mx-auto text-white  bg-gradient-to-tr from-[#ff9022] from-25% via-50%   via-[#bb65da]  to-[#7034fc] to-65%">
        <div className="w-[40%] ">
          <img
            src={logo}
            alt="candy image"
            className="md:block hidden w-[500px] object-contain"
          />
        </div>

        <div className="md:my-[120px] my-10 md:w-[60%] w-full  text-left px-20">
          <h1 className="text-title-large mb-8 font-satoshi-bold">
            {strings.HOME_SECTION_6_TITLE}
          </h1>

          <div className="text-desc-custom mb-8">
            {strings.HOME_SECTION_6_DESCRIPTION}
          </div>
          <div className="grid md:grid-cols-4 gap-4  grid-cols-1 text-center">
            {strings.HOME_SECTION_6_GRID.map((item, index) => (
              <div>
                <h1 className="text-title-large font-satoshi-bold">
                  {item.TITLE}
                </h1>
                <p className="font-satoshi-medium">{item.DESCRIPTION} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
