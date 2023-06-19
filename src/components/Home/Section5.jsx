import React from "react";
import stars from "../../assests/acros-media/starts.png";
import strings from "../../strings";
const Section5 = () => {
  return (
    <div className="w-screen">
      <div className="font-satoshi-bold my-10 w-[92%] rounded-[30px] px-10 h-fit bg-gradient-to-tr from-green-300 via-cyan-300 to-cyan-500 mx-auto py-24  text-center text-desc-custom ">
        <h2 className="md:text-title-custom text-title-custom-mv font-bold mb-10">
          {strings.HOME_SECTION_5_TITLE}
        </h2>
        <div className="w-[80%] mx-auto grid h-fit md:grid-cols-2 grid-cols-1 gap-4">
          {strings.HOME_SECTION_5_GRID.map((item, index) => (
            <div className="flex-col justify-around items-center  mt-5">
              <div className="w-full my-4">
                <img src={stars} className="m-auto block " alt="stars" />
              </div>
              <h2 className="text-subtitle-custom-mv md:text-subtitle-custom  mb-4 ">
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
