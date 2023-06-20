import React from "react";
import strings from "../../strings";
const Section4 = () => {
  return (
    <div className="w-screen h-fit md:text-desc-basic text-desc-basic-mv ">
      <div className="shadow-3xl h-fit w-[92%] mx-auto  rounded-[30px] bg-bottom bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fearthbg.jpg?alt=media&token=ecbe34ca-d6fb-4724-a0ee-7216ac4e8df2')] py-24 px-[5%]  text-white">
        <div className="h-[60%] font-satoshi-bold text-left mb-10 md:text-title-large  text-title-large-mv">
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
