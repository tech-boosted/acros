import React from "react";
import strings from "../../strings";

const Section3 = () => {
  return (
    <div className="w-screen ">
      <div className="bg-gradient-to-tr from-[#0e6968]  via-[#25153d]  to-[#000] to-[80%] w-full py-[10%] h-fit px-[10%] mb-10 text-white  text-desc-custom mx-auto">
        <h2 className="text-title-large-mv md:text-title-large text-center font-satoshi-bold">
          {strings.CAREER_SECTION_4_TITLE}{" "}
        </h2>
        <p className="text-subtitle-basic-mv md:text-subtitle-basic font-satoshi-bold mb-3 mt-4 text-center">
          {strings.CAREER_SECTION_4_DESCRIPTION}
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mt-16 ">
          {strings.CAREER_SECTION_4_GRID.map((item, index) => (
            <div key={index}>
              <h2 className="font-satoshi-bold md:text-subtitle-basic text-subtitle-basic-mv mb-4 ">
                Equal Pay
              </h2>
              <p>
                Our salary and compensation is merit based regardless of gender
                or geography.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
