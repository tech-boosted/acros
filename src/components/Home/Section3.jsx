import React from "react";
import strings from "../../strings";
import logo from "../../assests/acros-media/section3Img.png";

const Section3 = () => {
  return (
    <div className="w-screen leading-relaxed font-satoshi-bold md:text-desc-basic text-desc-basic-mv">
      <div className="pt-10 md:w-[92vw] my-10 md:px-[4%] px-[5%]">
        <h2 className="text-center md:text-title-large text-title-large-mv font-satoshi-bold mb-20  w-[92vw]">
          Scale your E-Commerce Advertising with Trusted Partners
        </h2>
        <div className="shadow-3xl flex rounded-[30px]  h-fit text-black w-[92vw] bg-gradient-to-br from-[#1de5e2] from-40% via-[#6196e8] via-60% to-[#955aec] text-desc-custom">
          <div className="md:w-[60%] w-full md:p-24 p-[30px]">
            <section className="flex justify-between items-center ">
              <p className=" md:text-title-large text-title-large-mv font-satoshi-bold">
                {strings.HOME_SECTION_3_TITLE}
              </p>
            </section>
            <div>
              <p className="my-5">{strings.HOME_SECTION_3_DESCRIPTION}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 grid-cols-1 md:text-start text-center ">
              {strings.HOME_SECTION_3_GRID.map((item, index) => (
                <div className="flex-col" key={index}>
                  <div className="md:text-title-large text-title-large-mv font-satoshi-bold">
                    {item.TITLE}
                  </div>
                  <div className="">{item.DESCRIPTION} </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:block hidden w-[40%] mt-10 ">
            <img src={"https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2FMultiChannelAdvertising%20Section.png?alt=media&token=bb99b3f6-6b4b-4835-83fb-5cc9dd06ceee"} alt="Mobile design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
