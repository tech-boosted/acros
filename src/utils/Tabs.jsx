import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Tabs = ({arr}) => {
  const [data, setdata] = useState(0);
  return (
    <div className="w-full h-fit text-desc-custom my-10">

      <div>
        {/* <h2 className="my-10 md:text-subtitle-custom text-subtitle-custom-mv font-satoshi-bold">
          Capabilities
        </h2> */}
        <div className="flex md:flex-row flex-col-reverse w-full justify-between ">
          <div className="md:w-[45%] w-full h-fit md:mx-auto bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-8 mt-10 px-12 rounded-[30px]">
            <p className="text-white">{arr[data].desc}</p>
          </div>
          <div className="md:w-[50%] w-full  flex flex-col justify-start items-center">
            {arr.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex md:w-[80%] w-full py-3   px-5   border-blue-700 border-b-[2px] items-center justify-between"
                onClick={() => setdata(index)}
              >
                <p className="font-satoshi-bold">{item.key}</p>
                <BsArrowRight className="transform hover:translate-x-2 transition-all delay-2 font-bold text-blue-700 text-[23px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
