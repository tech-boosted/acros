import React from "react";
import map from "../../assests/acros-media/FINAL-MAP-1024x510.png";
import { useNavigate } from "react-router";
import strings from "../../strings";

const Strings = strings;

const Section11 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <div className="md:w-[92%] w-[90%] h-fit grid md:grid-cols-2 grid-cols-1 gap-10 text-white md:mx-[4%] mx-auto my-10">
        <div className="w-full md:h-full h-fit flex flex-col gap-10">
          <div className="shadow-3xl w-full  h-fit bg-gradient-to-br from-[#cef76d] from-1%  via-[#66b636] via-40%  to-[#00e89e] to-80% rounded-[30px] px-10 py-24">
            <div className="font-satoshi-bold text-left mb-4 md:text-title-large text-title-large-mv">
              <p>{Strings.HOME_SECTION_9_TITLE_1}</p>
            </div>
            <div className="text-left flex-col  mt-4">
              <p className="">{Strings.HOME_SECTION_9_DESCRIPTION_1}</p>

              <button
                className="my-4 bg-black  text-white rounded-lg py-2 px-3"
                onClick={() => {
                  navigate("/agency");
                }}
              >
                Learn More.
              </button>
            </div>
          </div>
          <div className=" shadow-3xl w-full  h-fit bg-gradient-to-tr from-[#ff9022] from-25% via-50%   via-[#bb65da]  to-[#7034fc] to-65%     rounded-[30px] px-10 py-24">
            <div className="font-satoshi-bold text-left mb-4 md:text-title-large text-title-large-mv">
              <p>{Strings.HOME_SECTION_9_TITLE_2}</p>
            </div>
            <div className="text-left flex-col  mt-4">
              <p>{Strings.HOME_SECTION_9_DESCRIPTION_2}</p>
              <button
                className="my-4 bg-black  text-white rounded-lg py-2 px-3"
                onClick={() => {
                  navigate("/agency");
                }}
              >
                Learn More.
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-3xl w-full h-fit bg-gradient-to-br from-[#cef76d] from-1%  via-[#66b636] via-40%  to-[#00e89e] to-80% rounded-[30px] px-10 ">
          <img src={map} alt="geographical map" className="mx-auto mt-10" />
          <div className=" flex items-center justify-center  ">
            <div className="my-16 w-full text-left">
              <h1 className="md:text-title-large text-title-large-mv mb-8 font-satoshi-bold">
                {strings.HOME_SECTION_9_TITLE_3}
              </h1>
              <p className="text-subtitle-basic-mv md:text-subtitle-basic mb-8">
                {strings.HOME_SECTION_9_SUBTITLE}
              </p>
              <div className=" mb-8">
                <p>{strings.HOME_SECTION_9_DESCRIPTION_3}</p>
              </div>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-4 text-center">
                {strings.HOME_SECTION_9_GRID.map((item, index) => (
                  <div key={index}>
                    <h1 className="md:text-title-large text-title-large-mv font-satoshi-bold">
                      {item.TITLE}
                    </h1>
                    <p className="font-satoshi-medium">{item.DESCRIPTION}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section11;
