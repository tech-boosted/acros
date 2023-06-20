import React from "react";
import strings from "../../strings";
import Slider from "../Slider";

const Section1 = () => {
  return (
    <div className="w-screen h-fit md:text-desc-basic text-desc-basic-mv">
      <div
        className="h-fit 
      md:pt-[200px]
      pt-[150px]
      py-32 px-[10%] text-white
      bg-cover bg-no-repeat bg-right-bottom
       bg-[url('https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fearthbg.jpg?alt=media&token=ecbe34ca-d6fb-4724-a0ee-7216ac4e8df2')] 
      "
      >
        <div className="h-[100%] font-satoshi-bold text-left  md:text-title-large text-title-large-mv">
          <p>{strings.AGENCY_SECTION_1_TITLE}</p>
          <p className="md:text-subtitle-basic text-subtitle-basic-mv  mb-8">
            {strings.AGENCY_SECTION_1_SUBTITLE}
          </p>
        </div>
        <div className="text-left flex-col justify-end gap-12 md:w-[50%]">
          <p className="mt-6 leading-relaxed font-satoshi-bold ">
            {strings.AGENCY_SECTION_1_DESCRIPTION}
          </p>
          <p className="mt-6 leading-relaxed font-satoshi-bold ">
            {strings.AGENCY_SECTION_1_DESCRIPTION}
          </p>
        </div>
      </div>
      <Slider />
      <div className="w-full flex md:flex-row flex-col items-center justify-center  px-[10%]  my-24">
        <div className=" w-full text-left">
          <div className="md:w-[70%]">
            <p className="md:w-[80%] w-full md:text-title-large text-title-large-mv font-satoshi-bold mb-8 leading-snug tracking-tight">
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
                  <p className="md:text-title-basic text-title-basic-mv font-satoshi-bold">
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
