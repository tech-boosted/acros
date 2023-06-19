import React from "react";
import strings from "../../strings";

const Section2 = () => {
  return (
    <div className="w-screen">
      <div className="h-fit py-[90px] bg-[#e2e2e2] md:px-[15%] px-10">
        <div className="w-full mb-10 flex items-center font-satoshi-bold text-title-basic tracking-tight leading-snug">
          {strings.ABOUT_SECTION_2_DESCRIPTION}
        </div>

        <div className=" grid md:grid-cols-4 grid-cols-1 gap-12 text-center">
          {strings.ABOUT_SECTION_2_GRID.map((item, index) => (
            <div className="flex-col " key={index}>
              <p className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
                {item.TITLE}
              </p>
              <p className="font-satoshi-medium leading-snug text-desc-custom">
                {item.DESCRIPTION}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
