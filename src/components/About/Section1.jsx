import React from "react";
import strings from "../../strings";
const Section1 = () => {
  return (
    <div className="w-screen h-fit flex items-end justify-center bg-cover bg-[url('https://res.cloudinary.com/dfwvu60ef/image/upload/v1686093632/bkg_1_bjjncw.jpg')] ">

      <div className=" md:w-[60%] w-full px-10    my-auto h-[60%] justify-center gap-8 flex-col flex items-center pt-36 mb-28">

        <p className="text-title-extra-large font-satoshi-bold">We are {" "}
          <div className="bg-white">
            <span style={{color:'red', marginRight: '1px', display: 'inline-block'}}>&nbsp;</span>
            Acros
            <span style={{color:'red', marginRight: '1px', display: 'inline-block'}}>&nbsp;</span>
          </div>
        </p>
        <p className="font-satoshi-medium text-subtitle-custom leading-relaxed text-center">
         {strings.ABOUT_SECTION_1_DESCRIPTION}
        </p>
      </div>



    </div>

  );
};

export default Section1;
