import React from "react";
import strings from "../../strings";
const Section4 = () => {
  return (
    <div className="w-screen h-fit text-desc-custom ">
      <div className="h-fit w-[92%] mx-auto  rounded-[30px] bg-bottom bg-cover bg-[url('https://res.cloudinary.com/dfwvu60ef/image/upload/v1686145258/earth_horizontal_adqh3a.jpg')] py-24 px-[5%]  text-white">
        <div className="h-[60%] font-satoshi-bold text-left mb-10 md:text-title-custom  text-title-custom-mv">
          <p>{strings.HOME_SECTION_4_TITLE}</p>
        </div>
        <div className="text-left flex-col justify-end gap-12">
          <p className="mt-10 font-satoshi-bold">
            {strings.HOME_SECTION_4_DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
