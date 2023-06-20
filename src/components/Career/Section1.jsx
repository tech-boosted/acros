import React from "react";
import banner from "../../assests/acros-media/Group-114.png";
import strings from "../../strings";
const Section1 = () => {
  return (
    <div className="w-screen h-fit p-5 flex flex-col items-center justify-center text-desc-basic-mv md:text-desc-basic pt-[150px] md:pt-[200px]">
      <h2 className="font-bold md:text-title-large text-title-large-mv mb-10 font-satoshi-bold">
        {strings.CAREER_SECTION_1_TITLE}{" "}
      </h2>
      <img src={banner} alt="Office" />
    </div>
  );
};

export default Section1;
