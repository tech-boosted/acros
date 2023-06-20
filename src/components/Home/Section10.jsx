import React from "react";
import strings from "../../strings";

const Section10 = () => {
  return (
    <div className="md:w-screen  mx-auto px-[4%] md:text-desc-basic text-desc-basic-mv ">
      <div className="shadow-3xl bg-gradient-to-tr from-[#0e6968]  via-[#25153d]  to-[#000] to-[80%]  w-full h-fit px-[10%] py-20  rounded-[30px] text-white  text-desc-custom">
        <section className="flex justify-between items-center">
          <div>
            <p className=" md:text-title-large text-title-large-mv font-bold">
              {strings.HOME_SECTION_8_TITLE}
            </p>
          </div>
        </section>
        <div className="my-10 md:w-[70%] w-[100%] ">
          <p>{strings.HOME_SECTION_8_DESCRIPTION}</p>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-10 font-satoshi-bold">
          {strings.HOME_SECTION_8_GRID.map((item, index) => (
            <div>
              <p className="">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section10;
