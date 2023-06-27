import React from "react";
import strings from "../../strings";
import logo from "../../assests/acros-media/section6.png";
const Section6 = () => {
  return (
    <div className="w-screen">
      <div className="shadow-3xl mb-10 flex md:flex-row flex-col items-center justify-center md:text-desc-basic text-desc-basic-mv md:w-[92%] w-[90%]  rounded-[30px] mx-auto text-white  bg-gradient-to-tr from-[#ff9022] from-25% via-50%   via-[#bb65da]  to-[#7034fc] to-65%">
        <div className="w-[40%] ">
          <img
            src={"https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2FOurImpact%20Section.png?alt=media&token=c13b2e4e-40bd-4cb2-aaf0-c291df7e3a41"}
            alt="candy image"
            className="md:block hidden w-[500px] object-contain"
          />
        </div>

        <div className="md:my-[120px] my-10 md:w-[60%] w-full  text-left px-10 md:px-20">
          <h1 className="md:text-title-large text-title-large-mv mb-8 font-satoshi-bold">
            {strings.HOME_SECTION_6_TITLE}
          </h1>

          <div className="md:text-desc-basic text-desc-basic-mv mb-8">
            {strings.HOME_SECTION_6_DESCRIPTION}
          </div>
          <div className="grid md:grid-cols-4 gap-4  grid-cols-1 text-center">
            {strings.HOME_SECTION_6_GRID.map((item, index) => (
              <div key={index}>
                <h1 className="md:text-title-large text-title-large font-satoshi-bold">
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
