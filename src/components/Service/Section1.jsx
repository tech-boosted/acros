import React from "react";
import strings from "../../strings";
import Slider from "../Slider";

const Section1 = () => {
  return (
    <div className="w-screen h-fit text-desc-custom">
      <div
        className="h-fit 
      pt-[200px]
      py-32 px-[10%] text-white
      bg-cover bg-no-repeat bg-right-bottom
       bg-[url('https://res.cloudinary.com/dfwvu60ef/image/upload/v1686145258/earth_horizontal_adqh3a.jpg')] 
      "
      >
        <div className="h-[100%] font-satoshi-bold text-left mb-8 text-title-large">
          <p>{strings.AGENCY_SECTION_1_TITLE}</p>
        </div>
        <div className="text-left flex-col justify-end gap-12 md:w-[50%]">
          <p className="mt-6 leading-relaxed font-satoshi-bold text-desc-custom">
            {strings.AGENCY_SECTION_1_DESCRIPTION}
          </p>
          <p className="mt-6 leading-relaxed font-satoshi-bold text-desc-custom">
            {strings.AGENCY_SECTION_1_DESCRIPTION}
          </p>
        </div>
      </div>
      <Slider />
      <div className="w-full flex md:flex-row flex-col items-center justify-center text-desc-custom px-[10%]  my-24">
        <div className=" w-full text-left">
          <div className="w-[70%]">
            <p className="md:w-[80%] w-full md:text-title-large text-title-custom-mv font-satoshi-bold mb-8 leading-snug tracking-tight">
              {strings.AGENCY_SECTION_2_TITLE}{" "}
            </p>

            <div className="md:w-[80%] w-full mb-20">
              <p className="font-satoshi-bold ">
                {strings.AGENCY_SECTION_2_DESCRIPTION}
              </p>
            </div>
          </div>
          <div className="bg-black text-white rounded-[30px]">
            <div className="grid md:grid-row-4 grid-cols-1 gap-4  md:grid-cols-4 text-center px-8 ">
              {strings.AGENCY_SECTION_2_GRID.map((item, index) => (
                <div className="text-center py-4 pb-8">
                  <p className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                    {item.TITLE}
                  </p>
                  <p className="font-satoshi-medium">{item.DESCRIPTION}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
