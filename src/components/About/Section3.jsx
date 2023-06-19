import React from "react";
import strings from "../../strings";

const Section3 = () => {
  return (
    <div className="w-screen h-fit flex items-center text-desc-custom overflow-x-hidden">
      <div className="h-fit  bg-gradient-to-tr from-green-300 via-cyan-300 to-cyan-500 py-32 text-black md:px-[18%] px-10">
        {/* <h2 className="font-satoshi-bold text-title-custom md:text-left text-left mb-10">Our Values</h2> */}
        <p className=" mb-16 text-center font-satoshi-bold text-title-large tracking-tight leading-snug">
          {strings.ABOUT_SECTION_3_TITLE}
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 text-[19px] mb-16">
          {strings.ABOUT_SECTION3_GRID.map((item, index) => (
            <div className="flex-col " key={index}>
              <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold mb-3">
                Integrity
              </p>
              <p className="text-desc-custom font-satoshi-medium ">
                Being honest, transparent, and ethical in all business dealings
                are our top priority, We treat customers, employees, and
                stakeholders with respect and fairness.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
