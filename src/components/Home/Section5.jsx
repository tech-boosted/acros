import React from "react";
import stars from "../../assests/acros-media/starts.png";
import strings from "../../strings";
const Section5 = () => {
  return (
    <div className="w-screen">
      <div className="shadow-3xl font-satoshi-bold my-10 w-[92%] rounded-[30px] px-10 h-fit bg-gradient-to-tr from-green-300 via-cyan-300 to-cyan-500 mx-auto md:py-24 py-10 text-center text-desc-custom ">
        <h2 className="md:text-title-large text-title-large-mv font-satoshi-bold mb-10">
          {strings.HOME_SECTION_5_TITLE}
        </h2>
        <div className="md:w-[80%] w-full mx-auto grid h-fit md:grid-cols-2 grid-cols-1 gap-4">
          {strings.HOME_SECTION_5_GRID.map((item, index) => (
            <div className="flex-col justify-around items-center  mt-5">
              <div className="w-full my-4">
                <img src={stars} className="m-auto block " alt="stars" />
              </div>
              <h2 className="text-subtitle-basic-mv md:text-subtitle-basic  mb-4 ">
                {item.TITLE}
              </h2>
              <p className=" mb-4 font-satoshi-regular">{item.TESTIMONY}</p>
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

export default Section5;
