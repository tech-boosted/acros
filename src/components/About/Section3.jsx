import React from "react";
import strings from "../../strings";

const Section3 = () => {
  return (
    <div className="w-screen h-fit flex items-center text-desc-basic-mv md:text-desc-basic overflow-x-hidden">
      <div className="h-fit  bg-gradient-to-tr from-green-300 via-cyan-300 to-cyan-500 py-32 text-black md:px-[18%] px-10">
        {/* <h2 className="font-satoshi-bold text-title-custom md:text-left text-left mb-10">Our Values</h2> */}
        <p className=" mb-16 text-center font-satoshi-bold md:text-title-large text-title-large-mv tracking-tight leading-snug">
          {strings.ABOUT_SECTION_3_TITLE}
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 text-[19px] mb-16">
          {strings.ABOUT_SECTION3_GRID.map((item, index) => (
            <div className="flex-col " key={index}>
              <p className="text-subtitle-basic-mv md:text-subtitle-basic font-satoshi-bold mb-3">
                {item.TITLE}
              </p>
              <p className="text-desc-basic-mv md:text-desc-basic font-satoshi-medium ">
                {item.DESCRIPTION}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
