import React from "react";
import strings from "../../strings";

const Section2 = () => {
  return (
    <div className=" w-screen   h-fit mx-auto px-[10%] py-[6%] gap-4  items-center bg-[#e2e2e2] md:text-title-basic text-title-basic-mv tracking-tight leading-snug">
      <p className="font-satoshi-bold  ">
        {strings.HOME_SECTION_2_DESCRIPTION}
      </p>

      <button className="my-10 bg-black text-white md:text-desc-basic text-desc-basic-mv rounded-lg py-2 px-3">
        Learn More About Our Services.
      </button>
    </div>
  );
};

export default Section2;
