import React from "react";
import strings from "../../strings";
import logo from "../../assests/acros-media/section3Img.png";

const Section3 = () => {
  return (
    <div className="w-screen leading-relaxed font-satoshi-bold text-desc-custom">
      <div className="pt-10 md:w-[92vw] my-10 md:px-[4%] px-[5%]">
        <h2 className="text-center text-title-large font-satoshi-bold mb-20  w-[92vw]">
          Scale your E-Commerce Advertising with Trusted Partners
        </h2>
        <div className="flex rounded-[30px]  h-fit text-black w-[92vw] bg-gradient-to-br from-[#1de5e2] from-40% via-[#6196e8] via-60% to-[#955aec] text-desc-custom">
          <div className="w-[60%] md:p-24 p-[30px]">
            <section className="flex justify-between items-center ">
              <p className=" text-title-large font-satoshi-bold">
                {strings.HOME_SECTION_3_TITLE}
              </p>
            </section>
            <div>
              <p className="my-5">{strings.HOME_SECTION_3_DESCRIPTION}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 grid-cols-1 md:text-start text-center ">
              {strings.HOME_SECTION_3_GRID.map((item, index) => (
                <div className="flex-col">
                  <div className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                    {item.TITLE}
                  </div>
                  <div className="">{item.DESCRIPTION} </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[40%]">
            <img src={logo} alt="Mobile design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
