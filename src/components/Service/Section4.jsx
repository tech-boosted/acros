import React from "react";
import stars from "../../assests/acros-media/starts.png";
import strings from "../../strings";

export const Section4 = () => {
  return (
    <div className="w-screen h-fit px-[10%] bg-gradient-to-r from-[#00112B] from-0% to-[#000103] to-50% text-white py-24 mb-10 text-desc-basic-mv md:text-desc-basic">
      <section className="flex justify-between items-center">
        <div>
          <p className=" md:text-title-custom text-title-custom-mv font-satoshi-bold">
            {strings.AGENCY_SECTION_5_TITLE}{" "}
          </p>
        </div>
      </section>
      <div className="my-10 md:w-[85%] w-[100%] ">
        <p className="font-satoshi-bold leading-loose">
          {strings.AGENCY_SECTION_5_DESCRIPTION}
        </p>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-10 ">
          {strings.AGENCY_SECTION_5_GRID.map((item, index) => (
            <div key={index}>
              <p className="pr-8 font-satoshi-bold leading-loose">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="md:text-title-custom text-title-custom-mv font-bold font-satoshi-bold mb-10">
          {strings.AGENCY_SECTION_6_TITLE}
        </h2>
        <div className="grid h-fit md:grid-cols-2 grid-cols-1 gap-4 text-center">
          
          {strings.AGENCY_SECTION_6_GRID.map((item, index) => (
            <div
              className="flex-col justify-around items-center  mt-5"
              key={index}
            >
              <div className="w-full my-4">
                <img src={stars} className="m-auto block " alt="stars" />
              </div>
              <h2 className="text-subtitle-basic-mv md:text-subtitle-basic font-satoshi-bold mb-4">
                {item.TITLE}{" "}
              </h2>
              <p className=" mb-4 text-[#bfbfbf]">{item.TESTIMONY}</p>
              <p>{item.NAME}</p>
              <p>{item.POSITION}</p>
              <p>{item.COMPANY}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
